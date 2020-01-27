export class Circle {
    constructor() {
        this.radiusValue = null;
    }
    set radius(newRadius) {
        if(newRadius){
            if (newRadius <= 0 || isNaN(newRadius)) {
                this.radiusValue = NaN;
            } else {
                this.radiusValue = +newRadius;
            }
        }
    }

    get radius() {
        return this.radiusValue;
    }

    get diameter() {
        return this.radiusValue + this.radiusValue;
    }

    getArea(){
        return Math.PI * Math.pow(this.radiusValue, 2);
    }
    getLength(){
        return 2 * Math.PI * this.radiusValue;
    }
}