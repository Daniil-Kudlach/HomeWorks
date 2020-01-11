import {
    CookiesGenerator
} from './CookiesGenerator.js';

function newGame() {
    const startBtn = document.createElement('div');
    const modal = document.createElement('div');
    const score = document.createElement('h2');
    startBtn.classList.add('start-btn');
    startBtn.innerText = 'START';
    score.innerText = `Max score: ${localStorage.getItem('score')||0}`;
    startBtn.addEventListener('click', () => startGame());
    modal.classList.add('modal-div');
    modal.prepend(score, startBtn);
    document.body.prepend(modal);

    function startGame() {
        document.querySelector('.gameContainer').innerHTML = '';
        document.querySelector('.coin').innerHTML = 'coin:0';
        modal.style.display = 'none';
        startBtn.style.display = 'none';
        const cg = new CookiesGenerator();
    }
}

newGame();