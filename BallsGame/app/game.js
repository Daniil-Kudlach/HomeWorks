/*
1) Раз в секунду появляются шарики диаметром от 50px до 100px вверху экрана, в случайном месте.
2) Каждый шарик случайного цвета из радуги.
3) Каждые полсекунды каждый шарик двигается вниз на расстояние от 5px до 20px
4) При клике на шарик, он удаляется и счет игрока увеличивается на 1 очко.
5) При касании нижней части экрана, шарик удаляется и счет игрока уменьшается на 5 очков.
*/


const parent = document.querySelector('.game');
const scoreTab = document.createElement('span');
const muz = document.querySelector('#bkgrMusic');
const clickAudio = document.querySelector('#clickAudio');
const goverAudio = document.querySelector('#goverAudio');
const failAudio = document.querySelector('#failAudio');
let score = 0;
let maxScore = 0;
document.querySelector('#strtBtn').addEventListener('click', startGame);

function startGame() {
    parent.innerHTML = '';
    scoreTab.classList.add('score');
    scoreTab.textContent = '0';
    parent.append(scoreTab);
    document.querySelector('#strtBtn').classList.add('inviz');
    goverAudio.pause();
    goverAudio.currentTime = 0;
    muz.loop = true;
    muz.play();
    ballGenerator();
}

//Генератор шаров
function ballGenerator() {
    //каждую секунду создавать элемент Ball
    return setInterval(() => new Ball(), 1000);
}

function addScore(sc) {
    score += Math.floor(sc);
    score == 50 ? ballGenerator() : 0;
    maxScore < score ? maxScore = score : 0;
    score < 0 ? gameOver() : scoreTab.textContent = score;
}

function gameOver() {
    let hInt = setInterval(';');
    for (let i = 0; i < hInt; i++) {
        clearInterval(i);
    }
    document.querySelector('#strtBtn').classList.remove('inviz');
    parent.innerHTML = `<p class = "gameOver">GAME OWER<br><small>Max score: ${maxScore}</small></p>`;
    score = 0;
    muz.pause();
    muz.currentTime = 0;
    goverAudio.play();
    return;
}

class Ball {
    constructor() {
        const colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];
        //создается элемент Шарик
        this.ball = document.createElement('div');
        //генерируется случайный диаметр от 50 до 100 пикселей
        const width = this.random(50, 101);
        this.ball.style.width = width + 'px';
        this.ball.style.height = width + 'px';
        //выбирается случайный цвет из 7 доступных
        this.gr = width / 2;
        this.ball.style.background = `radial-gradient(at ${this.gr + (this.gr / 2)}px ${this.gr - (this.gr / 2)}px, white,${colors[this.random(0, 7)]})`;
        //генерируется шаг шарика от 5 до 20 пикселей и записывается в свойство "ШАГ"
        this.step = this.random(5, 21);
        //генерируется стартовое состояние left от 0 до края экрана
        this.ball.style.left = this.random(5, 95) + '%';
        //top свойство задается = 0
        this.top = 0;
        //на шарик вешается слушатель действия "Клик"
        this.ball.addEventListener('click', () => this.click());
        //шарик добавляется родительскому элементу
        parent.appendChild(this.ball);
        //создать интервал в 0.5 секунды и повесить обработчик метод "шаг"
        this.interval = score < 10 ? setInterval(() => this.goStep(), 500) : setInterval(() => this.goStep(), (500 - score));
    }

    random(min = 1, max = 100) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    //Метод "шаг"
    goStep() {
        //шарик двигается на расстояние "ШАГ"
        this.top += this.step;
        this.ball.style.top = this.top + 'px';
        //проверяем, достигли ли мы границы экрана
        this.top > parent.clientHeight ? this.fail() : 0;
        //если достигли, то запускаем метод "ПРОВТЫКАЛ"
    }

    //метод "КЛИК"
    click() {
        //добавить в счет пользователю 1 очко
        clickAudio.play();
        addScore(1);
        //удалить шарик(вызвать метод "СМЕРТЬ");
        setTimeout(() => this.death(), 50);
        this.ball.classList.add('anim');
        clickAudio.currentTime = 0;
    }

    //метод "ПРОВТЫКАЛ"
    fail() {
        //отнять 5 очков из счета игрока
        failAudio.play();
        addScore(-5);
        //удалить шарик(вызвать метод "СМЕРТЬ")
        this.death();
        failAudio.currentTime = 0;
    }

    //метод "СМЕРТЬ"
    death() {
        //удаляет шарик
        this.ball.remove();
        clearInterval(this.interval);
    }
}