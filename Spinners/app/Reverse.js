export class Reverse{
    constructor(arr,i,speed){
        this.arr = arr;
        this.speed = speed; 
        this.inter;
        this.li = document.querySelector(`.rev${i}`);
        this.counter = 0;
        this.len = this.arr.length;
    }
    rev(){
        this.interval = setInterval(() => {
            console.log(this.arr[this.counter]);
            this.li.innerText = this.arr[this.counter++];
            this.counter == this.len? this.counter = 0:0;
        }, this.speed);
    }
}