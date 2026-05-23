let questionNumber = 0
let score = 0
const quizSummary = []

const questionText = document.querySelector("#questionText")
const answersGrid = document.querySelector("#answersGrid")
const currentQ = document.querySelector("#currentQ")


function nextQuestion() {
  const domanda = questions[questionNumber]
  questionText.textContent = domanda.question
  currentQ.textContent = questionNumber + 1
  answersGrid.replaceChildren()
  answersGrid.style.pointerEvents = "auto"

  const risposte = [domanda.correct_answer, ...domanda.incorrect_answers]

  risposte.sort(() => Math.random() - 0.5)

  risposte.forEach(function (risposta) {
    const label = document.createElement("label")
    const input = document.createElement("input")
    const span = document.createElement("span")

    label.className = "answer"

    input.type = "radio"
    input.name = "answer"
    input.value = risposta
    span.textContent = risposta

    label.addEventListener("click", function () {
      if (answersGrid.style.pointerEvents === "none") return

      answersGrid.style.pointerEvents = "none"

      clearInterval(timer)
     //aggiunta per mostrare riepilogo
      quizSummary.push({
        questionText: domanda.question,
        userAnswer: risposta,
        correctAnswer: domanda.correct_answer,
        result: risposta === domanda.correct_answer ? "correct" : "wrong"
      })

      if (risposta === domanda.correct_answer) {
        score++
      }

      setTimeout(vaiAllaProssimaDomanda, 700)
    })

    label.appendChild(input)
    label.appendChild(span)

    answersGrid.appendChild(label)
  })
}

function vaiAllaProssimaDomanda() {
  questionNumber++

  if (questionNumber < questions.length) {
    nextQuestion()
    avviaTimer()
  } else {
    mostraRisultatoFinale()
  }
}

function mostraRisultatoFinale() {
  clearInterval(timer)

  const correctPercentage = Math.round((score / questions.length) * 100)
  const quizArea = document.querySelector(".quiz")
  const footer = document.querySelector(".quiz-footer")
  const timerBox = document.querySelector(".timer")

  if (footer) footer.style.display = "none"
  if (timerBox) timerBox.style.display = "none"

  quizArea.replaceChildren()

  // Chiamiamo la funzione che si trova dentro summary.js e gli passiamo i dati
  generaSchermataFinale(correctPercentage, quizArea)
}

nextQuestion()

// invoco funzione timer
avviaTimer()
