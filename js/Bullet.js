import Unit from './Unit';

export default class extends Unit{
    constructor(path, width, height, context){
        super(path, width, height, 0, 0, 0, context);
    }
    moveRight(){
        this.positionX += 10;   
        this.context.drawImage(this.img, this.positionX, this.positionY);
    }
}