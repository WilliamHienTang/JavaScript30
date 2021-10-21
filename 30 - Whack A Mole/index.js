const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const highScoreBoard = document.querySelectorAll('.score')[1];
const moles = document.querySelectorAll('.mole');

const minTime = 500;
const maxTime = 1000;
const gameDuration = 10000;

let lastHole;
let gameOver = false;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
highScoreBoard.textContent = highScore;

function randomTime(min, max){
    return Math.random() * (max - min) + min;
}

function randomHole(){
    const i = Math.floor(Math.random() * holes.length);
    hole = holes[i];

    if(hole === lastHole){
        return randomHole();
    }

    lastHole = hole;
    return hole;
}

function peep(){
    const time = randomTime(minTime, maxTime);
    const hole = randomHole();
    hole.classList.add('up');

    setTimeout(() => {
        hole.classList.remove('up');
        
        if(!gameOver){
            peep();
        }
    }, time);
}

function startGame(){
    resetGame();
    peep();
    setTimeout(() => {
        endGame();
    }, gameDuration);
}

function resetGame(){
    score = 0;
    scoreBoard.textContent = score;
    gameOver = false;
}

function endGame(){
    gameOver = true;
    if(score > highScore){
        highScore = score;
        highScoreBoard.textContent = highScore;
        localStorage.setItem('highScore', score);
    }
}

function whack(e){
    if(e.isTrusted){
        score++;
        this.parentNode.classList.remove('up');
        scoreBoard.textContent = score;
    }
}

moles.forEach(mole => mole.addEventListener('click', whack));