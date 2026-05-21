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
      "In the programming language Java, which keyword makes a variable unmodifiable?",
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
    question: "Pointers were not used in the original C programming language.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the preferred image format used for logos in Wikimedia?",
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
    question: "What is the code name for Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What was the old Twitter character limit?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an Indonesian island?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let questionNumber = 0;
let score = 0;
let quizSummary = [];

const questionText = document.querySelector("#questionText");
const answersGrid = document.querySelector("#answersGrid");
const currentQ = document.querySelector("#currentQ");

function nextQuestion() {
  const domanda = questions[questionNumber];

  questionText.innerHTML = domanda.question;
  currentQ.innerHTML = questionNumber + 1;
  answersGrid.innerHTML = "";

  const risposte = [domanda.correct_answer, ...domanda.incorrect_answers];

  risposte.sort(() => Math.random() - 0.5);

  risposte.forEach(function (risposta) {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");

    label.className = "answer";
    input.className = "radio";

    input.type = "radio";
    input.name = "answer";
    input.value = risposta;

    span.innerHTML = risposta;

    label.onclick = function (event) {
      if (event.target.tagName === "INPUT") return;

      if (risposta === domanda.correct_answer) {
        score++;
      }

      quizSummary.push({
        questionText: domanda.question,
        allAnswers: risposte,
        userAnswer: risposta,
        correctAnswer: domanda.correct_answer,
        result: risposta === domanda.correct_answer ? "correct" : "wrong",
      });

      answersGrid.style.pointerEvents = "none";

      setTimeout(function () {
        questionNumber++;

        if (questionNumber < questions.length) {
          avviaTimer();
          nextQuestion();
          answersGrid.style.pointerEvents = "auto";
        } else {
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
  document.querySelector(".question").style.display = "none";
  document.querySelector(".answers").style.display = "none";
  document.querySelector(".timer").style.display = "none";
  document.querySelector(".quiz-footer").style.display = "none";

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
}

let risposteCorrette = 7; 
let risposteSbagliate = 3;

localStorage.setItem('punteggioEsatto', risposteCorrette);
localStorage.setItem('punteggioSbagliato', risposteSbagliate);

window.location.href = 'risultati.html';
