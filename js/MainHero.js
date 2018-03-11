import Unit from './Unit';

export default class extends Unit{
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
}
