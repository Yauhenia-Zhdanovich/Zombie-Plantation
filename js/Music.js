export default class{
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
}
