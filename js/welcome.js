const checkboxConditions = document.querySelector("#promise-check");
const proceedButton = document.querySelector(".proceed-btn");
const errorMessage = document.querySelector("#error");
proceedButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkboxConditions.checked) {
    window.location.href = "quiz.html";
  } else {
    errorMessage.style.display = "block";
  }
});
