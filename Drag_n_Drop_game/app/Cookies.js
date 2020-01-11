export class Cookies {
    constructor() {
        this.cookies = document.createElement('div');
        this.rand = this.random(1, 100);
        this.name = 'none';
        this.deadZone = {};
        this.coords = {};
        this.lifeTime = 7;
        this.interval = setInterval(() => this.life(), 1000);
    }

    cookiesCreator() {
        if (this.rand < 60) { //процентная вероятность генерации moon-cookies(60%)
            this.name = 'moon';
        } else if (this.rand < 90) { //процентная вероятность генерации sun-cookies(30%)
            this.name = 'sun';
        } else if (this.rand < 100) { //процентная вероятность генерации star-cookies(10%)
            this.name = 'star';
        }
        this.cookies.classList.toggle(this.name);
        this.coordMaker();
        this.cookies.style.left = `${this.coords.x}px`;
        this.cookies.style.top = `${this.coords.y}px`;
        return this.cookies;
    }

    random(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    coordMaker() {
        let windSize = document.body.getBoundingClientRect();
        this.deadZone.x = windSize.width / 2 - 115; //начальная точка зоны в которой расположена черная дыра и в которой нельзя генерировать
        this.deadZone.y = windSize.height / 2 - 115; //печеньки, число 115 = (половина width/height черной дыры + width/height печеньки)
        this.coords.x = this.random(0, (windSize.width - 50)); //Число 50 - width/height печеньки(для исключения генерации запределами поля)
        this.coords.y = this.random(0, (windSize.height - 50));
        while ((this.coords.x > this.deadZone.x) &&
            (this.coords.x < (this.deadZone.x + 180)) &&
            (this.coords.y > this.deadZone.y) &&
            (this.coords.y < (this.deadZone.y + 180))) { //пока координаты генерации печеньки находятся в зоне черной дыры, повторно вызываем их генерацию
            this.coords.x = this.random(0, (windSize.width - 50));
        }
    }

    life() {
        if (this.lifeTime > 0) {
            this.cookies.draggable == false ? this.lifeTime-- : 0;
        } else {
            clearInterval(this.interval);
            this.cookies.parentNode ? this.cookies.parentNode.removeChild(this.cookies) : 0;
            this.cookies = '';
        }
    }
}