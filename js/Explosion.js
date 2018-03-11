import Unit from './Unit';

export default class extends Unit{
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
}