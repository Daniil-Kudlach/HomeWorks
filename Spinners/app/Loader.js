export class Loader{
    constructor(symb, i, speed){
        this.symb = symb;
        this.speed = speed;
        this.inter;
        this.loadStatus = 0;
        this.class = `.li${i}`;
        this.li = document.querySelector(this.class);
    }
    load(){
        this.inter = setInterval(()=>{
            if(this.loadStatus == 100){
                clearInterval(this.inter);
                this.inter = false;
                this.li.innerHTML = `${this.symb.repeat(this.loadStatus/3)} Load complete!`;
            }else{
                this.li.innerHTML = `${this.symb.repeat(this.loadStatus / 3)} ${this.loadStatus}%`;
                this.loadStatus++;
            }
        }, this.speed);
    }
}