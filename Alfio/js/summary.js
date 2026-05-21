
function showFinalSummary(){
    const summaryContainer = document.getElementById("summary-area")
    summaryContainer.replaceChildren()
    quizSummary.forEach(function(element){

        //creiamo la scatola per la singola domanda
        const card = document.createElement("div")
        card.className = "summary-card"
        //creiamo il testo della domanda
        const pQuestion = document.createElement("p")
        pQuestion.textContent =element.questionText
        pQuestion.className = "question-title"
        //creiamo il testo della risposta data
        const pAnswer = document.createElement("p")
        pAnswer.textContent = "Your Answer:" + element.userAnswer
        //controllo dell'esito
        if(element.result ==="correct"){
            pAnswer.className = "result-correct"
        }else{
            pAnswer.className = "result-wrong"
        }
        card.appendChild(pQuestion)
        card.appendChild(pAnswer)
        summaryContainer.appendChild(card)
    })
    
}