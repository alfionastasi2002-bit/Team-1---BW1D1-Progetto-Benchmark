let secondi = 60;
const countdown = document.querySelector('#countdown');
const timerCircle= document.querySelector('.timer-circle');

const timer= setInterval(function() {
    secondi--;
    countdown.textContent= secondi; 

const percent = (secondi / 60) * 100;
  timerCircle.style.background = `conic-gradient(#00e5ff ${percent}%, rgba(255,255,255,0.1) 0%)`;


    if (secondi <= 0) {
        clearInterval(timer);    
    }
}, 1000);