//funzione che crea il riepilogo finale
function generaSchermataFinale(correctPercentage, quizArea) {
  const section = document.createElement("section")
  section.className = "result-page";


  const finalScore = document.createElement("div")
  finalScore.className = "final-score";
  finalScore.textContent = `${correctPercentage}%`


  const summaryTitle = document.createElement("h2")
  summaryTitle.textContent = "Answers Review"

 
  const summaryArea = document.createElement("div")
  summaryArea.id = "summary-area"


  section.appendChild(finalScore)
  section.appendChild(summaryTitle)
  section.appendChild(summaryArea)
  quizArea.appendChild(section)


  showFinalSummary()

  // Se il punteggio è >= 60%, spara i coriandoli!
  if (correctPercentage >= 60) {
    showConfetti()
  }
}


function showFinalSummary() {
  const summaryContainer = document.getElementById("summary-area")
  if (!summaryContainer) return // Sicurezza per evitare errori

  summaryContainer.replaceChildren()

  quizSummary.forEach(function (element, index) {
    const card = document.createElement("div")
    card.className = "summary-card"


    const pQuestion = document.createElement("p")
    pQuestion.textContent = `${index + 1}. ${element.questionText}`
    pQuestion.className = "question-title"

    const pAnswer = document.createElement("p")
    pAnswer.textContent = `Your Answer: ${element.userAnswer}`
    pAnswer.className = element.result === "correct" ? "result-correct" : "result-wrong"

    const pCorrect = document.createElement("p")
    pCorrect.textContent = `Correct Answer: ${element.correctAnswer}`
    pCorrect.className = "correct-answer"

    card.appendChild(pQuestion)
    card.appendChild(pAnswer)

    if (element.result === "wrong") {
      card.appendChild(pCorrect);
    }

    summaryContainer.appendChild(card)
  });
}


function showConfetti() {
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  setTimeout(function () { confetti({ particleCount: 50, spread: 90, origin: { x: 0.3, y: 0.7 } }); }, 300)
  setTimeout(function () { confetti({ particleCount: 50, spread: 90, origin: { x: 0.7, y: 0.7 } }); }, 600)
}