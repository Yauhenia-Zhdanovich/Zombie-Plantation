/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (class{
    constructor(path, width, height, count, positionX, positionY, context){
        this.img = null;
        this.path = path;
        this.width = width;
        this.height = height;
        this.count = count;
        this.positionX = positionX;
        this.positionY = positionY;
        this.context = context;
        this.counter = 0;
        this.num = 1;
        this.loadImage();
    }
    loadImage(){
        let image = document.createElement('img');
        image.src = this.path;
        this.img = image;
    }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (class{
    constructor(path, count, context, axisX, velocity){
        this.img = null;
        this.path = path;
        this.width = null;
        this.height = null;
        this.count = count; 
        this.context = context;
        this.velocity = velocity;
        this.num = 1;
        this.counter = 0;
        this.axisX = axisX;
        this.loadImage();
    }
    loadImage(){
        let image = document.createElement('img');
        image.src = this.path;
        this.img = image;
        image.onload = (e) => {
            this.height = e.target.height;
            this.width = e.target.width/this.count;
        }
    }
    drawImage(y){
        this.counter++;
        if(this.axisX <= -1278){
            this.axisX = 1278;
        }
        this.axisX -= this.velocity;
        if(this.counter % 4 == 0){
            if(this.num >= this.count){
                this.num = 1;
            }
            else {
                this.num += 1;
            }
        }
        this.context.drawImage(this.img,this.width * (this.num - 1),0,this.width,this.height,this.axisX,y,this.width,this.height)
    }
});



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Unit__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (class extends __WEBPACK_IMPORTED_MODULE_0__Unit__["a" /* default */]{
    constructor(path, width, height, count, positionY, context, velocity){
        super(path, width, height, count, 1300, positionY, context);
        this.velocity = velocity;
    }
    moveLeft(){
        this.counter++;
        this.positionX -= this.velocity;
        if(this.counter % 8 == 0){
            if(this.num >= this.count){
                this.num = 1;
            }
            else{
                this.num++;
            }
        }
        this.context.drawImage(this.img, this.width*(this.num-1), 0, this.width, this.height, this.positionX, this.positionY, 0.8*this.width, 0.8*this.height);
    }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Background__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bat_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Bullet_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Engine_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Explosion_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Image_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MainHero_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Music_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Zombie_js__ = __webpack_require__(2);









//import '../scss/style.scss';

(function(){
   
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const trees_1 = new __WEBPACK_IMPORTED_MODULE_0__Background__["a" /* default */]('img/trees.png',1,context,0,0);
    const trees_2  = new __WEBPACK_IMPORTED_MODULE_0__Background__["a" /* default */]('img/trees.png',1,context,1300,0);
    const landscape_1 = new __WEBPACK_IMPORTED_MODULE_0__Background__["a" /* default */]('https://s5.postimg.org/4qgd27fmf/landscape.png',1,context,0,0);
    const landscape_2 = new __WEBPACK_IMPORTED_MODULE_0__Background__["a" /* default */]('https://s5.postimg.org/4qgd27fmf/landscape.png',1,context,1270,0);
    const bonfire_1 = new __WEBPACK_IMPORTED_MODULE_5__Image_js__["a" /* default */]('https://s5.postimg.org/dhmxd5007/fire_256.png',13,context,1303 , 0);
    const bonfire_2 = new __WEBPACK_IMPORTED_MODULE_5__Image_js__["a" /* default */]('https://s5.postimg.org/dhmxd5007/fire_256.png',13,context, 1170, 0);
    const bonfire_3 =  new __WEBPACK_IMPORTED_MODULE_5__Image_js__["a" /* default */]('https://s5.postimg.org/dhmxd5007/fire_256.png',13,context, 300, 0);
    const foreground = new __WEBPACK_IMPORTED_MODULE_0__Background__["a" /* default */]('img/stones_foreground.png',1,context, 0,0);
    const foreground_1 = new __WEBPACK_IMPORTED_MODULE_0__Background__["a" /* default */]('img/stones_foreground.png',1,context,1275,0);
    const button = document.getElementById('fullScreen');
    const buttonsDown = {};
    const engine = new __WEBPACK_IMPORTED_MODULE_3__Engine_js__["a" /* default */](context);
    const hero = new __WEBPACK_IMPORTED_MODULE_6__MainHero_js__["a" /* default */]('img/mainHero.png', 200, 184, 10, context, buttonsDown, engine);
    let enemies = [];
    const audioMain = new __WEBPACK_IMPORTED_MODULE_7__Music_js__["a" /* default */](['music/main.mp3'], 0.3);
    const audioJump = new __WEBPACK_IMPORTED_MODULE_7__Music_js__["a" /* default */](['music/jump.mp3'], 0.5); 
    const audioShot = new __WEBPACK_IMPORTED_MODULE_7__Music_js__["a" /* default */](['music/shot.mp3'], 0.3);
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
            enemies.push(new __WEBPACK_IMPORTED_MODULE_8__Zombie_js__["a" /* default */]('img/enemyIdle.png', 125, 135, 2, 500, context, 2));
        }
        if(Math.random() < currentRandom){
            enemies.push(new __WEBPACK_IMPORTED_MODULE_1__Bat_js__["a" /* default */]('img/bat.png', 195, 122, 8, 200 + Math.random()*200, context, 2));
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
                        explosions.push(new __WEBPACK_IMPORTED_MODULE_4__Explosion_js__["a" /* default */]('https://s5.postimg.org/yxen43lrb/explosion.png', 94, 94, 6, enemies[i].positionX, enemies[i].positionY, context));
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

        bullets.push(new __WEBPACK_IMPORTED_MODULE_2__Bullet_js__["a" /* default */]('img/bullet2.png', 15, 15, context));
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




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Image__ = __webpack_require__(1);


class Background extends __WEBPACK_IMPORTED_MODULE_0__Image__["a" /* default */]{
    drawImage(y){
        if(this.axisX <= -this.width){
            this.axisX = this.width;
        }
        this.axisX-=this.velocity;
        this.context.drawImage(this.img,this.width * (this.num - 1),0,this.width,this.height,this.axisX,y,this.width,this.height)
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Background;





/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Zombie__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (class extends __WEBPACK_IMPORTED_MODULE_0__Zombie__["a" /* default */]{
    moveLeft(){
        this.counter++;
        this.positionX -= this.velocity;
        if(this.counter % 8 == 0){
            if(this.num >= this.count){
                this.num = 1;
            }
            else{
                this.num++;
            }
        }
        this.context.drawImage(this.img, 200*(this.num-1)+12, 20, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Unit__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (class extends __WEBPACK_IMPORTED_MODULE_0__Unit__["a" /* default */]{
    constructor(path, width, height, context){
        super(path, width, height, 0, 0, 0, context);
    }
    moveRight(){
        this.positionX += 10;   
        this.context.drawImage(this.img, this.positionX, this.positionY);
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (class{
    constructor(context){
        this.context = context;
        this.heroToDo = null;
        this.enemyToDo = null;
        this.bulletToDo = null;
        this.checkCollisions = null;
        this.drawBackground = null;
        this.requestId = null;
        this.drawMoon = null;
    }
    gameStart(func1, func2, func3, func4, func5, func6){
        this.heroToDo = func1;
        this.enemyToDo = func2;
        this.bulletToDo = func3;
        this.checkCollisions = func4;
        this.drawBackground = func5;
        this.drawMoon = func6;
        this.gameStep();
        
    }
    gameStep(){
        this.context.clearRect(0, 0, 1280, 637);
        this.drawBackground();
        this.drawMoon();
        this.enemyToDo();
        this.bulletToDo();
        this.heroToDo();
        this.checkCollisions();
        this.requestId = requestAnimationFrame(() => this.gameStep());
    }
    setHeroEngine(func){
        this.heroToDo = func;
    }
    stopEngine(){
        cancelAnimationFrame(this.requestId);
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Unit__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (class extends __WEBPACK_IMPORTED_MODULE_0__Unit__["a" /* default */]{
    detonate(){
        this.counter ++;
        if(this.counter % 5 == 0){
            if(this.num >= this.count){
                this.num = 1;
            }
            else{
                this.num++;
            }
        }
        this.context.drawImage(this.img, this.width*(this.num-1), 0, this.width, this.height, this.positionX, this.positionY, this.width, this.height);
    }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Unit__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (class extends __WEBPACK_IMPORTED_MODULE_0__Unit__["a" /* default */]{
    constructor(path, width, height, count, context, buttonsDown, engine){
        super(path, width, height, count, 100, 480, context);
        this.buttonsDown = buttonsDown;
        this.engine = engine;
        this.status='idle';
    }
    move(){
        this.counter++;
        if(this.counter % 2 != 0){
            if(this.num >= this.count){
                this.num = 1;
            }
            else{
                this.num++;
            }
        }
        this.context.drawImage(this.img, this.width*(this.num-1), 520, this.width, this.height, this.positionX, this.positionY, 0.8*this.width, 0.8*this.height);
    }
    idle(){
        this.counter++;
        if(this.counter % 4 == 0){
            if(this.num >= this.count){
            this.num = 1;
            }
            else{
                this.num++;
            }
        }
        this.context.drawImage(this.img, this.width*(this.num-1), 0, this.width, 167, this.positionX, this.positionY, 0.8*this.width, 0.8*167);
    }
    jumpUp(){
        this.positionY -= 5;
        this.context.drawImage(this.img, 0, 344, this.width, 176, this.positionX, this.positionY, 0.8*this.width, 0.8*176);
        if(this.positionY <= 150){
            this.status = 'jumpDown';
            this.engine.setHeroEngine(() => this.jumpDown());
        }
    }
    jumpDown(){
        this.positionY += 5;
        this.context.drawImage(this.img, 0, 344, this.width, 176, this.positionX, this.positionY, 0.8*this.width, 0.8*176);
        if(this.positionY >= 480){
            this.positionY = 480;
            if(this.buttonsDown.right){
                this.status = 'move';
                this.engine.setHeroEngine(() => this.move());
                return;
            }
            this.status = 'idle';
            this.engine.setHeroEngine(() => this.idle());
        }
    }
    jumpUpForward(){
        this.positionY -= 5;
        this.context.drawImage(this.img, 0, 344, this.width, 176, this.positionX, this.positionY, 0.8*this.width, 0.8*176);
        if(this.positionY <= 150){
            this.status = 'jumpForwardDown';
            this.engine.setHeroEngine(() => this.jumpDownForward());
        }
    }
    jumpDownForward(){
        this.positionY += 5;
        this.context.drawImage(this.img, 0, 344, this.width, 176, this.positionX, this.positionY, 0.8*this.width, 0.8*176);
        if(this.positionY >= 480){
            this.positionY = 480;
            if(this.buttonsDown.right){
                this.status = 'move';
                this.engine.setHeroEngine(() => this.move());
                return;
            }
            this.status = 'idle';
            this.engine.setHeroEngine(() => this.idle());
        }
    }

    shot(){
        this.counter++;
        if(this.counter % 3 != 0){
            this.num++;;
        }
        this.context.drawImage(this.img, 215*(this.num-1), 168, 215, 176, this.positionX-13, this.positionY-9, 172, 143);
        if(this.num >= 9){
            if(this.buttonsDown.right){
                this.status = 'move';
                this.engine.setHeroEngine(() => this.move());
                return;
            }
            else{
                this.status = 'idle';
                this.engine.setHeroEngine(() => this.idle());
            }
        }
    }
    shotJump(){
        this.counter++;
        if(this.counter % 3 != 0){
            return;
        }
        this.num++;
        this.context.drawImage(this.img, 0, 344, this.width, 176, this.positionX, this.positionY, 0.8*this.width, 0.8*176);
        if(this.num >= 10){
            this.status = 'idle';
            this.engine.setEngine(() => this.idle());
        }
    }
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (class{
    constructor(arr, vol){
        this.dom = null;
        this.state = 'stop';
        this.create(arr, vol);
    }
    create(arr, vol){
        let audio = document.createElement('audio');
        for(let i = 0; i < arr.length; i++){
            let source = document.createElement('source');
            source.src = arr[i];
            audio.appendChild(source);
            
        }
        audio.volume = vol || 1;
        this.dom = audio;
    }
    play(){
        this.dom.play();
        this.state = 'play';
    }
    pause(){
        this.dom.pause();
        this.state = 'pause';
    }
    stop(){
        this.dom.pause();
        this.dom.currentTime = 0;
        this.state = 'stop';
    }
    setVolume(vol){
        this.dom.volume = vol;
    }
});


/***/ })
/******/ ]);