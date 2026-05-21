cosa ho aggiunto ai file: 
1. Ho creato un div vuoto che conterrà il riepilogo.

2. ho inserito in cima al file di alfio(questions.js) una variabile che contiene un array  vuoto che andrà a memorizzare sottoforma di oggetto la cronologia di ogni domanda fatta e la risposta data dall'utente: const quizSummary = []

3. ho aggiunto alla funzione dell'onclick di Alfio dopo score++ dentro l'if, questo pezzettino di codice che mi andra a generare al click la domanda e la risposta che ha dato l'utente e l'esito (giusta o sbagliata) e mi inserisce (.push()) queste informazioni sulla variabile che ho creato quinzSummary:
                {.....quizSummary.push({
                      questionText: domanda.question,
                      userAnswer: risposta,
                      result: "correct"
                });
                }else{
                quizSummary.push({
                    questionText: domanda.question,
                    userAnswer: risposta,
                    result: "wrong"
                })
                };

4. ho creato file js per il riepilogo summary.js
ho creato una funzione (showFinalSummary) che spiego passo passo con i commenti cosi potete studiarla 
si occupa di generare la schermata finale. Per prima cosa seleziono l'elemento HTML (il div con id=summary-area)
usando document.getElementById.
svuoto l'elemento nel caso in cui si debba ripetere il test per averlo sempre vuoto ogni volta.
Successivamente avvio un ciclo forEach sull'array quizSummary che prende uno alla volta gli oggetti che abbiamo salvato durante il quiz(element) e per ognuno di essi esegue le istruzioni di stampa che si trovano all'interno 

Per ogni elemento della lista creo dinamicamente 3 pezzi tramite js usando createElement:
1.un contenitore div ( chiamato card)
2.un paragrafo per la domanda(chiamato pQuestion)
un paragrafo per la risposta (chiamato pAnswer)
Assegno i testi usanto textContent e poi eseguo un controllo condizionale if :
vado a leggere la proprietà .result dell'oggetto , se = a "correct" assegno al testo della risposta la classe css .result-correct 
altrimenti gli assegno la classe css .result-wrong.
Infine assemblo la struttura: infilo domanda e risposta dentro la card e l'intera card nel contenitore della pagina.

5. dal setTimeout in poi ho aggiunto un controllo condizionale if/else che gestisce la sparizione del quiz e la comparsa del riepilogo 



