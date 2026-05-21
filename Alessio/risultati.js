        const corrette = parseInt(localStorage.getItem('punteggioEsatto')) || 0;
        const sbagliate = parseInt(localStorage.getItem('punteggioSbagliato')) || 0;
        
        const totalQuestions = corrette + sbagliate;
        
        document.getElementById('corrette').textContent = corrette;
        document.getElementById('sbagliate').textContent = sbagliate;

        const resultDocument = document.getElementById('esito');
        
        if (corrette >= (totalQuestions * 0.6)) {
            resultDocument.textContent = "Promosso!";
            resultDocument.style.color = "green"; 
        } else {
            resultDocument.textContent = "Rimandato";
            resultDocument.style.color = "red";
        }