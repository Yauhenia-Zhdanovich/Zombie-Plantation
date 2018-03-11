import Zombie from './Zombie';

export default class extends Zombie{
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
}