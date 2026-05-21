const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let questionNumber = 0;
let score = 0;
const quizSummary = [];

const questionText = document.querySelector("#questionText");
const answersGrid = document.querySelector("#answersGrid");
const currentQ = document.querySelector("#currentQ");

function nextQuestion() {
  const domanda = questions[questionNumber];
  questionText.innerHTML = domanda.question;
  currentQ.innerHTML = questionNumber + 1;
  answersGrid.innerHTML = "";

  const risposte = [domanda.correct_answer, ...domanda.incorrect_answers];
  risposte.sort(() => Math.random() - 0.5); // per avere una probabilità casuale dove andrà a finire la domanda

  risposte.forEach(function (risposta) {
    const label = document.createElement("label"); // per generare dinamicamente questi elementi nell'html
    const input = document.createElement("input");
    const span = document.createElement("span");

    label.className = "answer"; //assegnazioni classi css
    input.className = "radio";
    span.className = risposta;

    input.type = "radio"; //configurazione del'input
    input.name = "answer";
    input.value = risposta;

    span.innerHTML = risposta; // il testo dela rispost

    label.onclick = function (event) {
      if (event.target.tagName === "INPUT") return; // per eliminare il primo input di default

      // --- UNICA MODIFICA EFFETTUATA ---
      // Salviamo tutte le informazioni necessarie per far funzionare showFinalSummary() dopo
      if (risposta === domanda.correct_answer) {
        score++;
        quizSummary.push({
          questionText: domanda.question,
          userAnswer: risposta,
          correctAnswer: domanda.correct_answer, // Salvata!
          allAnswers: risposte, // Salvata!
          result: "correct",
        });
      } else {
        quizSummary.push({
          questionText: domanda.question,
          userAnswer: risposta,
          correctAnswer: domanda.correct_answer, // Salvata!
          allAnswers: risposte, // Salvata!
          result: "wrong",
        });
      }

      answersGrid.style.pointerEvents = "none";

      setTimeout(function () {
        questionNumber++;

        // CONTROLLO: Ci sono ancora domande?
        if (questionNumber < questions.length) {
          avviaTimer();
          nextQuestion();
          answersGrid.style.pointerEvents = "auto";
        } else {
          // SE LE DOMANDE SONO FINITE:

          // 1. Nascondiamo il quiz principale
          document.querySelector(".quiz").style.display = "none";

          // 2. Facciamo partire la funzione che stampa i risultati nel "summary-area”
          showFinalSummary();
        }
      }, 1000);
    };

    label.appendChild(input);
    label.appendChild(span);
    answersGrid.appendChild(label);
  });
}

nextQuestion();

function showFinalSummary() {
  if (document.querySelector(".question")) document.querySelector(".question").style.display = "none";
  if (document.querySelector(".answers")) document.querySelector(".answers").style.display = "none";
  if (document.querySelector(".timer")) document.querySelector(".timer").style.display = "none";
  if (document.querySelector(".quiz-footer")) document.querySelector(".quiz-footer").style.display = "none";

  const summaryContainer = document.getElementById("summary-area");
  summaryContainer.replaceChildren();

  const finalScore = document.createElement("h2");
  finalScore.textContent = "You answered correctly to " + score + " questions";
  summaryContainer.appendChild(finalScore);

  quizSummary.forEach(function (element) {
    const card = document.createElement("div");
    card.className = "summary-card";

    const pQuestion = document.createElement("p");
    pQuestion.textContent = element.questionText;
    pQuestion.className = "question-title";

    const answersList = document.createElement("ul");

    element.allAnswers.forEach(function (answer) {
      const li = document.createElement("li");
      li.textContent = answer;

      if (answer === element.correctAnswer) {
        li.classList.add("result-correct");
      }

      // risposta scelta dall'utente
      if (answer === element.userAnswer) {
        li.classList.add("selected-answer");
      }

      // risposta scelta ma sbagliata
      if (answer === element.userAnswer && answer !== element.correctAnswer) {
        li.classList.add("result-wrong");
      }
      answersList.appendChild(li);
    });

    card.appendChild(pQuestion);
    card.appendChild(answersList);
    summaryContainer.appendChild(card);
  });
  
  summaryContainer.style.display = "block";
}
/*
let risposteCorrette = 7;
let risposteSbagliate = 3;

localStorage.setItem("punteggioEsatto", risposteCorrette);
localStorage.setItem("punteggioSbagliato", risposteSbagliate);

window.location.href = "risultati.html";*/
