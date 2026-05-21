let secondi = 60;
let timer;

const countdown = document.querySelector('#countdown');
const timerCircle = document.querySelector('.timer-circle');

function avviaTimer() {
    clearInterval(timer);

    secondi = 60;
    countdown.textContent = secondi;

    if (timerCircle) {
        timerCircle.style.background = `conic-gradient(#00e5ff 100%, rgba(255,255,255,0.1) 0%)`;
    }

    timer = setInterval(function() {
        secondi--;
        countdown.textContent = secondi;
        
        if (timerCircle) {
            const percent = (secondi / 60) * 100;
            timerCircle.style.background = `conic-gradient(#00e5ff ${percent}%, rgba(255,255,255,0.1) 0%)`;
        }

        if (secondi <= 0) {
            clearInterval(timer);    
            const grid = document.querySelector('#answersGrid');
            if (grid) grid.style.pointerEvents = 'none';

            setTimeout(function() {
                questionNumber++;
                
                // Controllo di sicurezza: passiamo alla prossima solo se ce ne sono ancora!
                if (questionNumber < questions.length) {
                    nextQuestion();
                    avviaTimer();
                    if (grid) grid.style.pointerEvents = 'auto';
                } else {
                    // Se scade il tempo all'ultima domanda, chiudiamo il quiz!
                    document.querySelector(".quiz").style.display = "none";
                    if (document.querySelector(".quiz-footer")) {
                        document.querySelector(".quiz-footer").style.display = "none";
                    }
                    showFinalSummary();
                }
            }, 1000);
        }
    }, 1000);
}

// Avvia il timer la prima volta
avviaTimer();