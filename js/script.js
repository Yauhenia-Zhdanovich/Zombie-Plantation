import Background from './Background';
import Bat from './Bat.js';
import Bullet from './Bullet.js';
import Engine from './Engine.js';
import Explosion from './Explosion.js';
import Image from './Image.js';
import MainHero from './MainHero.js';
import Music from './Music.js';
import Zombie from './Zombie.js';
//import '../scss/style.scss';

(function(){
   
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const trees_1 = new Background('img/trees.png',1,context,0,0);
    const trees_2  = new Background('img/trees.png',1,context,1300,0);
    const landscape_1 = new Background('https://s5.postimg.org/4qgd27fmf/landscape.png',1,context,0,0);
    const landscape_2 = new Background('https://s5.postimg.org/4qgd27fmf/landscape.png',1,context,1270,0);
    const bonfire_1 = new Image('https://s5.postimg.org/dhmxd5007/fire_256.png',13,context,1303 , 0);
    const bonfire_2 = new Image('https://s5.postimg.org/dhmxd5007/fire_256.png',13,context, 1170, 0);
    const bonfire_3 =  new Image('https://s5.postimg.org/dhmxd5007/fire_256.png',13,context, 300, 0);
    const foreground = new Background('img/stones_foreground.png',1,context, 0,0);
    const foreground_1 = new Background('img/stones_foreground.png',1,context,1275,0);
    const button = document.getElementById('fullScreen');
    const buttonsDown = {};
    const engine = new Engine(context);
    const hero = new MainHero('img/mainHero.png', 200, 184, 10, context, buttonsDown, engine);
    let enemies = [];
    const audioMain = new Music(['music/main.mp3'], 0.3);
    const audioJump = new Music(['music/jump.mp3'], 0.5); 
    const audioShot = new Music(['music/shot.mp3'], 0.3);
    let bullets = [];
    let explosions = [];
    let score = 0;
    let currentVelocity = 2;
    let currentRandom = 0.005;
    let level = 0;
    let isGameEnded = false;
    const playButton = document.getElementById('playButton');
    const landingPageContainer = document.getElementById('landingPageContainer');
    const gameContainer = document.getElementById('gameContainer');
    const bodyHTML = document.querySelector('body');
    const div = document.getElementById('game_over');
    const reset = document.getElementById('reset');

    const updateEnemies = () => {
        if(Math.random() < currentRandom){
            enemies.push(new Zombie('img/enemyIdle.png', 125, 135, 2, 500, context, 2));
        }
        if(Math.random() < currentRandom){
            enemies.push(new Bat('img/bat.png', 195, 122, 8, 200 + Math.random()*200, context, 2));
        }
        for(let i = 0; i < enemies.length; i++){
            if(hero.status == 'move' || hero.status == 'jumpForwardUp' || hero.status == 'jumpForwardDown'){
                enemies[i].velocity = currentVelocity + 1;
            } else{
                enemies[i].velocity = currentVelocity;
            }
            enemies[i].moveLeft();
            if(enemies[i].positionX + enemies[i].width < 0){
                enemies.splice(i, 1);
                i--;
            }
        }
        if(score % 10 == 0 && score > 0){
            currentVelocity++;
            currentRandom += 0.001;
            score++;
            level++;
            document.getElementById('lvlSpan').innerHTML = level;
        }
    }
    const updateBullets = () => {
        for(let i = 0; i < bullets.length; i++){
            bullets[i].moveRight();
            if(bullets[i].positionX > canvas.width){
                bullets.splice(i, 1);
                i--;
            }
        }
    }

    const checkCollisions = () => {       
        const enemiesLength = enemies.length;
        const bulletsLength = bullets.length;
        const explosionsLength = explosions.length;
        for(let i = 0; i < enemiesLength; i++){
            let boolX = (hero.positionX + 0.8*hero.width - 70 >= enemies[i].positionX) &&
                            (hero.positionX + 30 <= enemies[i].positionX + 0.8*enemies[i].width);
            let boolY = (hero.positionY +20 <= enemies[i].positionY + 0.8*enemies[i].height) &&
                            (hero.positionY + 0.8*hero.height - 30 >= enemies[i].positionY);
            if(boolX && boolY){
                canvas.style.display = 'none';
                audioMain.stop();
                div.style.display = 'block';
                reset.style.display = 'block';
            }
            for(let j = 0; j < bullets.length; j++){
                let bool = (bullets[j].positionY >= enemies[i].positionY) && (bullets[j].positionY <= (enemies[i].positionY + enemies[i].height));
                if(bullets[j].positionX + bullets[j].width >= enemies[i].positionX && bool){

                    setTimeout(function(){
                        explosions.push(new Explosion('https://s5.postimg.org/yxen43lrb/explosion.png', 94, 94, 6, enemies[i].positionX, enemies[i].positionY, context));
                        enemies.splice(i ,1);
                        i--;
                    }, 0);

                    score++;
                    document.getElementById('scoreSpan').innerHTML = score;
                    bullets.splice(j ,1);
                    break;
                }
            }
        }
        for(let i = 0; i < explosionsLength; i++){
            explosions[i].detonate();

            if(explosions[i].num == 6){
                setTimeout(function(){
                    explosions.splice(i ,1);
                    i--;
                }, 0);  
            }
        }
    }
    const drawBackground = () => {
        if(hero.status == 'move' || hero.status == 'jumpForwardUp' || hero.status == 'jumpForwardDown'){
            landscape_1.velocity = 0.75;
            landscape_2.velocity = 0.75;
            trees_1.velocity = 1.7;
            trees_2.velocity = 1.7;
            bonfire_1.velocity = 2.3;
            bonfire_2.velocity = 2.3;
            bonfire_3.velocity = 2.3;
            foreground.velocity = 2.3;
            foreground_1.velocity = 2.3;
            
        } else{
            landscape_1.velocity = 0;
            landscape_2.velocity = 0;
            trees_1.velocity = 0;
            trees_2.velocity = 0;
            bonfire_1.velocity = 0;
            bonfire_2.velocity = 0;
            bonfire_3.velocity = 0;
            foreground.velocity = 0;
            foreground_1.velocity = 0;
        }

        landscape_1.drawImage(180);
        landscape_2.drawImage(180);
        trees_1.drawImage(280);
        trees_2.drawImage(280);
        bonfire_1.drawImage(470);
        bonfire_2.drawImage(470);
        bonfire_3.drawImage(480);
        foreground.drawImage(385);
        foreground_1.drawImage(385);
    }

    const drawMoon = () => { 
        context.beginPath(); 
        context.shadowBlur = 25; 
        context.shadowColor = '#fff'; 
        context.fillStyle = '#fff' 
        context.arc(200,120,35,0,2*Math.PI); 
        context.fill(); 
        context.shadowBlur = 0; 
    }

    const launchFullScreen = (element) => {
        if(element.requestFullScreen){
            element.requestFullScreen();
        }
        else if(element.mozRequestFullScreen){
            element.mozRequestFullScreen();
        }
        else if(element.webkitRequestFullScreen){
            element.webkitRequestFullScreen();
        }
    }

    const moveKeyDown = () => {
        if(hero.status == 'jumpUp' || hero.status == 'jumpDown' ||
            hero.status == 'jumpForwardUp' || hero.status == 'jumpForwardDown'){
            return;
        }
       // hero.img.src = 'img/mainHeroMove.png';
        hero.counter = 0;
        hero.status = 'move';
        buttonsDown.right = true;
        engine.setHeroEngine(() => hero.move());
    }

    const moveKeyUp = () => {
        buttonsDown.right = false;
        if(hero.status == 'jumpUp' || hero.status == 'jumpDown' ||
            hero.status == 'jumpForwardUp' || hero.status == 'jumpForwardDown'){
            return;
        }
        //hero.img.src = 'img/mainHeroIdle.png';
        hero.counter = 0;
        hero.status = 'idle';
        engine.setHeroEngine(() => hero.idle());
    }
    
    const jump = () => {
        if(audioJump.state == 'play'){
            audioJump.stop();
        }
        //hero.img.src = 'img/mainHeroJump.png';
        hero.counter = 0;
        buttonsDown.up = true;
        if(hero.status == 'idle' || hero.status == 'shot'){
            hero.status = 'jumpUp';
            engine.setHeroEngine(() => hero.jumpUp());
        }
        else if(hero.status == 'move'){
            hero.status = 'jumpForwardUp';
            engine.setHeroEngine(() => hero.jumpUpForward());
        } 
    }

    const shoot = () => {
        if(buttonsDown.space){
            return;
        }
        if(audioShot.state == 'play'){
            audioShot.stop();
        }
        audioShot.play();

        bullets.push(new Bullet('img/bullet2.png', 15, 15, context));
        bullets[bullets.length - 1].positionX = hero.positionX + 0.8*hero.width;
        bullets[bullets.length - 1].positionY = hero.positionY + 3 * 0.8*hero.height / 5;

        buttonsDown.space = true;
        if(hero.status == 'idle' || hero.status == 'move'){
            //hero.img.src = 'img/mainHeroShot.png';
            hero.counter = 0;
            hero.num = 0;
            hero.status = 'shot';
            engine.setHeroEngine(() => hero.shot());
        }
    }
    


    window.addEventListener('load', function(){
        
        playButton.addEventListener('click',function(){
            landingPageContainer.style.display = 'none';
            gameContainer.classList.remove('display_none');
            bodyHTML.style.background = '#121212';
            engine.gameStart(() => hero.idle(), updateEnemies, updateBullets, checkCollisions, drawBackground, drawMoon);
            audioMain.play();
        });

        window.addEventListener('keydown', function(e){

            switch(e.keyCode){
                case 39: moveKeyDown(); break;
                case 38: jump(); break;
                case 32: shoot(); break;
            }
        });

        window.addEventListener('keyup', function(e){
            switch(e.keyCode){
                case 39: moveKeyUp(); break;
                case 38: buttonsDown.up = false;; break;
                case 32: buttonsDown.space = false; break;
            }
        });

        button.addEventListener('click', function(){
            launchFullScreen(canvas);            
        });
        
        reset.addEventListener('click', function(){
            engine.stopEngine();
            audioMain.play();
            enemies = [];
            bullets = [];
            explosions = []; 
            currentVelocity = 2;
            currentRandom = 0.005;
            level = 0;
            score = 0; 
            document.getElementById('lvlSpan').innerHTML = level;
            document.getElementById('scoreSpan').innerHTML = score;

            engine.gameStart(() => hero.idle(), updateEnemies, updateBullets, checkCollisions, drawBackground, drawMoon);
            div.style.display = 'none';       
            reset.style.display = 'none';
            canvas.style.display = 'block';
        });
    });

 
}());


