export default class{
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
}

