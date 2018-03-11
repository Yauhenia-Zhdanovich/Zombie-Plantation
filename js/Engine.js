export default class{
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
}