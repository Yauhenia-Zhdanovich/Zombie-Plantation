import Image from './Image';

export default class Background extends Image{
    drawImage(y){
        if(this.axisX <= -this.width){
            this.axisX = this.width;
        }
        this.axisX-=this.velocity;
        this.context.drawImage(this.img,this.width * (this.num - 1),0,this.width,this.height,this.axisX,y,this.width,this.height)
    }
}


