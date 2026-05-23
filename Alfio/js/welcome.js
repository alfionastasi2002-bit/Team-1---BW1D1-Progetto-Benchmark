/* Gestisce la validazione della checkbox al click sul bottone.
Se la condizione è accettata reindirizza al quiz,
altrimenti mostra il messaggio di errore.*/

const checkboxConditions = document.querySelector("#promise-check")
const proceedButton = document.querySelector(".proceed-btn")
const errorMessage = document.querySelector("#error")


proceedButton.addEventListener("click", function (e) {
  e.preventDefault()
  if (checkboxConditions.checked) {
    window.location.href = "quiz.html"
  } else {
    errorMessage.style.display = "block"
  }
});

