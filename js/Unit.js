export default class{
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
}