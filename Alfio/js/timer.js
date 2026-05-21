// Secondi iniziali timer
let secondi = 60;

// Variabile intervallo timer
let timer;

// Selezione elementi HTML
const countdown = document.querySelector("#countdown");

const timerCircle = document.querySelector(".timer-circle");

// FUNZIONE TIMER
function avviaTimer() {
  // Ferma eventuali timer precedenti
  clearInterval(timer);

  // Reset secondi
  secondi = 60;

  // Aggiorna testo timer
  countdown.textContent = secondi;

  // Reset grafica cerchio
  timerCircle.style.background =
    "conic-gradient(#00e5ff 100%, rgba(255,255,255,0.1) 0%)";

  // Timer ogni secondo
  timer = setInterval(function () {
    // Diminuisce secondi
    secondi--;

    // Aggiorna numero timer
    countdown.textContent = secondi;

    // Calcolo percentuale grafica
    const percent = (secondi / 60) * 100;

    // Aggiorna cerchio animato
    timerCircle.style.background = `conic-gradient(#00e5ff ${percent}%, rgba(255,255,255,0.1) 0%)`;

    // Se tempo finito
    if (secondi <= 0) {
      // Ferma timer
      clearInterval(timer);

      // Salva risposta non data
      quizSummary.push({
        questionText: questions[questionNumber].question,

        userAnswer: "Nessuna risposta",

        correctAnswer: questions[questionNumber].correct_answer,

        result: "wrong",
      });

      // Passa domanda successiva
      vaiAllaProssimaDomanda();
    }
  }, 1000);
}
