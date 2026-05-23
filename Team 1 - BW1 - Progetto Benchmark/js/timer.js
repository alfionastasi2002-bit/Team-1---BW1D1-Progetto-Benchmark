let secondi = 60
let timer
const countdown = document.querySelector("#countdown")
const timerCircle = document.querySelector(".timer-circle")

function avviaTimer() {
  clearInterval(timer)

  secondi = 60;

  countdown.textContent = secondi

  timerCircle.style.background =
    "conic-gradient(#00e5ff 100%, rgba(255,255,255,0.1) 0%)"

  timer = setInterval(function () {
    secondi--
    countdown.textContent = secondi
    const percent = (secondi / 60) * 100

    timerCircle.style.background = `conic-gradient(#00e5ff ${percent}%, rgba(255,255,255,0.1) 0%)`

    if (secondi <= 0) {

      clearInterval(timer)

      quizSummary.push({
        questionText: questions[questionNumber].question,
        userAnswer: "Nessuna risposta",
        correctAnswer: questions[questionNumber].correct_answer,
        result: "wrong",
      })

      vaiAllaProssimaDomanda()
    }
  }, 1000)
}
