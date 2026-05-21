// IMPORTANTE:
//
// Questo codice è solo un appunto/esempio.
//
// La funzione showConfetti() dovrà essere inserita
// nella pagina finale dei risultati (results.html).
//
// Il setTimeout() invece va aggiunto
// nello script principale del quiz,
// SOSTITUENDO quello già esistente.

<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>;

setTimeout(function () {
  // Aumenta il numero della domanda
  questionNumber++;

  // Controlla se ci sono ancora domande
  if (questionNumber < questions.length) {
    // Fa partire il timer
    avviaTimer();

    // Mostra la domanda successiva
    nextQuestion();

    // Riattiva i click sulle risposte
    answersGrid.style.pointerEvents = "auto";
  } else {
    // Calcola la percentuale finale
    const percentage = (score / questions.length) * 100;

    // Se il punteggio è almeno 60%
    // mostra i coriandoli
    if (percentage >= 60) {
      showConfetti();
    }

    // Messaggi nella console
    console.log("Quiz finito");
    console.log("Punteggio:", percentage + "%");
  }
}, 1000); // 1000 = 1 secondo

// Funzione che mostra i coriandoli
function showConfetti() {
  // Primo effetto centrale
  confetti({
    particleCount: 100, // quantità coriandoli
    spread: 70, // apertura effetto
    origin: { y: 0.6 }, // punto di partenza
  });

  // Secondo effetto da sinistra
  setTimeout(() => {
    confetti({
      particleCount: 50,
      spread: 90,
      origin: { x: 0.3, y: 0.7 },
    });
  }, 300);

  // Terzo effetto da destra
  setTimeout(() => {
    confetti({
      particleCount: 50,
      spread: 90,
      origin: { x: 0.7, y: 0.7 },
    });
  }, 600);
}
