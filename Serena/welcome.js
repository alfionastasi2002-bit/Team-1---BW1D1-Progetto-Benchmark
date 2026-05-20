// 1. SELEZIONIAMO GLI ELEMENTI: Diciamo a JS quali pezzi di HTML deve controllare
const checkboxConditions = document.querySelector('#promise-check');
const proceedButton = document.querySelector('.proceed-btn');
const errorMessage = document.querySelector('#error')

// 2. METTIAMO IL BUTTAFUORI: Restiamo in ascolto del click sul bottone
proceedButton.addEventListener('click', function(e) {  
    // questo comando dice al browser: "Fermo, non cambiare pagina da solo!"
    e.preventDefault(); 
    // 3. IL CONTROLLO: Controlliamo se la proprietà .checked è vera (spuntata)
    if (checkboxConditions.checked === true) {    
        // Se è spuntata, allora diamo noi il permesso di andare alla pagina del quiz
        window.location.href = "quiz.html";     
    } else {    
        // Prendiamo la scritta e la rendiamo visibile! .. messa invisibile su css.
        errorMessage.style.display = "block";    
    }
});