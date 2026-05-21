// Numero della domanda attuale
let questionNumber = 0;

// Punteggio totale corretto
let score = 0;

// Array che salva il riepilogo finale
const quizSummary = [];

// Selezione elementi HTML
const questionText = document.querySelector("#questionText");
const answersGrid = document.querySelector("#answersGrid");
const currentQ = document.querySelector("#currentQ");

// FUNZIONE PRINCIPALE:
// mostra una domanda del quiz
function nextQuestion() {
  // Prende la domanda corrente
  const domanda = questions[questionNumber];

  // Inserisce il testo domanda nell'HTML
  questionText.innerHTML = domanda.question;

  // Aggiorna numero domanda nel footer
  currentQ.textContent = questionNumber + 1;

  // Pulisce le vecchie risposte
  answersGrid.innerHTML = "";

  // Riattiva i click sulle risposte
  answersGrid.style.pointerEvents = "auto";

  // Unisce risposta corretta e sbagliate
  const risposte = [domanda.correct_answer, ...domanda.incorrect_answers];

  // Mischia casualmente le risposte
  risposte.sort(() => Math.random() - 0.5);

  // Per ogni risposta...
  risposte.forEach(function (risposta) {
    // Creazione elementi HTML dinamici
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");

    // Classe CSS bottone risposta
    label.className = "answer";

    // Configurazione input radio
    input.type = "radio";
    input.name = "answer";
    input.value = risposta;

    // Inserisce testo risposta
    span.innerHTML = risposta;

    // EVENTO CLICK RISPOSTA
    label.addEventListener("click", function () {
      // Evita doppio click
      if (answersGrid.style.pointerEvents === "none") return;

      // Blocca ulteriori click
      answersGrid.style.pointerEvents = "none";

      // Ferma timer corrente
      clearInterval(timer);

      // Salva dati risposta nel riepilogo
      quizSummary.push({
        questionText: domanda.question,
        userAnswer: risposta,
        correctAnswer: domanda.correct_answer,

        // Controlla se corretta
        result: risposta === domanda.correct_answer ? "correct" : "wrong",
      });

      // Se corretta aumenta score
      if (risposta === domanda.correct_answer) {
        score++;
      }

      // Attende 700ms prima domanda successiva
      setTimeout(vaiAllaProssimaDomanda, 700);
    });

    // Inserimento elementi nell'HTML
    label.appendChild(input);
    label.appendChild(span);

    answersGrid.appendChild(label);
  });
}

// FUNZIONE:
// passa alla domanda successiva
function vaiAllaProssimaDomanda() {
  // Aumenta numero domanda
  questionNumber++;

  // Se ci sono ancora domande
  if (questionNumber < questions.length) {
    // Mostra nuova domanda
    nextQuestion();

    // Riavvia timer
    avviaTimer();
  } else {
    // Fine quiz
    mostraRisultatoFinale();
  }
}

// FUNZIONE:
// mostra schermata finale
function mostraRisultatoFinale() {
  // Ferma timer
  clearInterval(timer);

  // Calcolo percentuale finale
  const correctPercentage = Math.round((score / questions.length) * 100);

  // Selezione elementi pagina
  const quizArea = document.querySelector(".quiz");

  const footer = document.querySelector(".quiz-footer");

  const timerBox = document.querySelector(".timer");

  // Nasconde footer e timer
  if (footer) footer.style.display = "none";

  if (timerBox) timerBox.style.display = "none";

  // Svuota contenuto quiz
  quizArea.replaceChildren();

  // Creazione sezione finale
  const section = document.createElement("section");

  section.className = "result-page";

  // Creazione percentuale finale
  const finalScore = document.createElement("div");

  finalScore.className = "final-score";

  finalScore.textContent = `${correctPercentage}%`;

  // Titolo riepilogo
  const summaryTitle = document.createElement("h2");

  summaryTitle.textContent = "Riepilogo risposte";

  // Contenitore riepilogo
  const summaryArea = document.createElement("div");

  summaryArea.id = "summary-area";

  // Inserimento elementi
  section.appendChild(finalScore);

  section.appendChild(summaryTitle);

  section.appendChild(summaryArea);

  quizArea.appendChild(section);

  // Mostra cards riepilogo
  showFinalSummary();

  // Se percentuale >= 60%
  // mostra coriandoli
  if (correctPercentage >= 60) {
    showConfetti();
  }
}

// FUNZIONE:
// effetto coriandoli
function showConfetti() {
  // Esplosione centrale
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  // Esplosione sinistra
  setTimeout(function () {
    confetti({
      particleCount: 50,
      spread: 90,
      origin: { x: 0.3, y: 0.7 },
    });
  }, 300);

  // Esplosione destra
  setTimeout(function () {
    confetti({
      particleCount: 50,
      spread: 90,
      origin: { x: 0.7, y: 0.7 },
    });
  }, 600);
}

// Avvio iniziale quiz
nextQuestion();

// Avvio timer
avviaTimer();
