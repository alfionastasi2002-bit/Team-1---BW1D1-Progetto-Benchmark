// FUNZIONE:
// crea riepilogo finale risposte
function showFinalSummary() {
  // Contenitore riepilogo
  const summaryContainer = document.getElementById("summary-area");

  // Svuota eventuali contenuti
  summaryContainer.replaceChildren();

  // Per ogni risposta salvata...
  quizSummary.forEach(function (element, index) {
    // Creazione card
    const card = document.createElement("div");

    card.className = "summary-card";

    // Testo domanda
    const pQuestion = document.createElement("p");

    pQuestion.innerHTML = `${index + 1}. ${element.questionText}`;

    pQuestion.className = "question-title";

    // Risposta utente
    const pAnswer = document.createElement("p");

    pAnswer.textContent = `Your Answer: ${element.userAnswer}`;

    // Classe verde o rossa
    pAnswer.className =
      element.result === "correct" ? "result-correct" : "result-wrong";

    // Risposta corretta
    const pCorrect = document.createElement("p");

    pCorrect.textContent = `Correct Answer: ${element.correctAnswer}`;

    pCorrect.className = "correct-answer";

    // Inserimento elementi nella card
    card.appendChild(pQuestion);

    card.appendChild(pAnswer);

    // Mostra risposta corretta
    // solo se sbagliata
    if (element.result === "wrong") {
      card.appendChild(pCorrect);
    }

    // Inserisce card nel riepilogo
    summaryContainer.appendChild(card);
  });
}
