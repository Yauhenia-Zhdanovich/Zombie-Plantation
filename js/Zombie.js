import Unit from './Unit';

export default class extends Unit{
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
}