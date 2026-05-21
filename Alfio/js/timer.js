let secondi = 60;
let timer; 

const countdown = document.querySelector('#countdown');
const timerCircle = document.querySelector('.timer-circle');

function avviaTimer() {
    clearInterval(timer); 

    secondi = 60;
    countdown.textContent = secondi;
    

    timerCircle.style.background = `conic-gradient(#00e5ff 100%, rgba(255,255,255,0.1) 0%)`;

    timer = setInterval(function() {
        secondi--;
        countdown.textContent = secondi; 
        const percent = (secondi / 60) * 100;
        timerCircle.style.background = `conic-gradient(#00e5ff ${percent}%, rgba(255,255,255,0.1) 0%)`;

    if (secondi <= 0) {
        clearInterval(timer);    
        answersGrid.style.pointerEvents = 'none'; 
        setTimeout(function() {
           questionNumber++;
           nextQuestion();
           avviaTimer(); 
           
           answersGrid.style.pointerEvents = 'auto'; 
            }, 1000);
        }
    }, 1000);
}
avviaTimer();