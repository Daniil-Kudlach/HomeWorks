import {
    Cookies
} from './Cookies.js';

export class CookiesGenerator {
    constructor() {
        this.time = document.querySelector('.time');
        this.coin = document.querySelector('.coin');
        this.container = document.querySelector('.gameContainer');
        this.blackHole = document.querySelector('.holeForDrop');
        this.blackHole.addEventListener('drop', (ev) => this.drop(ev));
        this.blackHole.addEventListener('dragover', (ev) => this.dragover(ev));
        this.cookies = '';
        this.draggable = true;
        this.currentTime = 5;
        this.dragel = false;
        this.score = 0;
        this.interval = setInterval(() => this.timer(), 1000);
        this.cookTime = this.random(4, 2) * 1000;
        this.cookInterval = setInterval(() => this.genCook(), this.cookTime);
    }

    genCook() {
        this.cookTime = this.random(4, 2) * 1000;
        this.cookies = new Cookies().cookiesCreator();
        this.cookies.addEventListener('dragstart', (ev) => this.dragstart(ev));
        this.cookies.addEventListener('dragend', (ev) => this.dragend(ev));
        this.cookies.addEventListener('mousedown', (ev) => this.click(ev));
        this.container.append(this.cookies);
    }

    click(ev) {
        ev.target.draggable = this.draggable;
    }

    timer() {
        if (this.currentTime < 0) {
            clearInterval(this.cookInterval);
            clearInterval(this.interval);
            this.newGame();
            this.draggable = false;
            return
        }
        this.time.innerHTML = `${this.currentTime--} sec`;
    }

    dragend(ev) {
        ev.target.draggable = false;
    }

    drop(ev) {
        ev.preventDefault();
        if (this.dragel !== false && this.currentTime >= 0) {
            if (this.dragel.classList.contains('sun')) {
                this.score += 7;
            } else if (this.dragel.classList.contains('moon')) {
                this.score += 3;
            } else if (this.dragel.classList.contains('star')) {
                this.score += 11;
            }
            this.currentTime += 4;
            this.dragel.style.left = '5%';
            this.dragel.style.top = '5%';
            this.blackHole.append(this.dragel);
            this.dragel.classList.toggle('falling');
            this.coin.innerText = `coins:${this.score}`;
            this.time.innerText = `${this.currentTime} sec`;
            this.dragel = false;
        }
    }

    dragover(ev) {
        console.log(this.dragel);
        ev.preventDefault();
    }

    dragstart(ev) {
        this.dragel = ev.target;
    }

    random(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    newGame() {
        let modal = document.querySelector('.modal-div');
        let h2 = document.querySelector('h2');
        let maxScore = localStorage.getItem('score') || 0;
        maxScore < this.score ? localStorage.setItem('score', this.score) : 0;
        h2.innerText = `Max score: ${localStorage.getItem('score')}`;
        modal.style.display = 'block';
        document.querySelector('.start-btn').style.display = 'block';
    }
}