
const holes = document.querySelectorAll('.hole');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const startBtn = document.querySelector('#start');

let score = 0;
let time = 30;
let currentPos;


holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (parseInt(hole.getAttribute('data-index')) === currentPos) {
            score++;
            scoreEl.innerHTML = score;
        }
    })
});

startBtn.addEventListener('click', start);

function start() {
    let startGame = setInterval(() => { 
        holes.forEach(hole => {
            hole.innerHTML = '';
        });

        currentPos = Math.floor(Math.random() * 12);
        holes[currentPos].innerHTML = '<div class = "mole"></div>';
        time--;
        timeEl.innerHTML = time;
        if (time === 0) { 
            clearInterval(startGame); 
            setTimeout(() => {
                alert('Time is Over!');
            }, 100);
        }
    }, 1000);
}