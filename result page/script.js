const url = window.location; //otteniamo la pagina
const parameters = new URLSearchParams(url.search); //cerchiamo se ci sono dei parametri
let correctAnswer;
let wrongAnswer;
let questionsNumber;
let examPassed = false;

const correctAnswersText = document.getElementById("correctAnswersPercentage");
const wrongAnswersText = document.getElementById("wrongAnswersPercentage");
const spanCorrectText = document.getElementById("correctAnswersCount");
const spanWrongAnswersText = document.getElementById("wrongAnswersCount");

//se ci sono i parametri "correctAnswer", "wrongAnswers" e "questions", allora questi vengono settati
//altrimenti vengono settati a 0
correctAnswer = parameters.has("correctAnswer")
  ? parameters.get("correctAnswer")
  : 0;
wrongAnswer = parameters.has("wrongAnswers")
  ? parameters.get("wrongAnswers")
  : 0;
questionsNumber = parameters.has("question") ? parameters.get("question") : 0;

const correctPercentage =
  correctAnswer !== 0 && questionsNumber !== 0
    ? (correctAnswer * 100) / questionsNumber
    : 0;
const wrongPercentage =
  wrongAnswer !== 0 && questionsNumber !== 0
    ? (wrongAnswer * 100) / questionsNumber
    : 0;

//definiamo un oggetto "data" che contiene i dati per il grafico a ciambella
const data = {
  labels: ["Risposte Corrette", "Risposte Sbagliate"], //etichette per le due fette del grafico
  datasets: [
    {
      data: [0, 0], //dati iniziali per le due fette (0 risposte corrette e 0 risposte sbagliate)
      backgroundColor: ["#C2128D", "#00FFFF"] //colori di sfondo delle due fette
    }
  ]
};

//otteniamo il contesto (getContext) del canvas HTML con id "donut-chart"
let ctx = document.getElementById("donut-chart").getContext("2d");

//creiamo un nuovo grafico a ciambella utilizzando la libreria "Chart.js"
let donutChart = new Chart(ctx, {
  type: "doughnut", //la libreria ci permette di creare ogni tipo di grafico, quindi specifichiamo: tipo di grafico: ciambella
  data: data, //utilizziamo i dati definiti in precedenza
  options: {
    cutoutPercentage: 80,
    elements: {
      arc: {
        borderWidth: 0 //larghezza della linea di bordo delle fette del grafico (lo "spessore")
      }
    }
  }
});

//nascondiamo la legenda predefinita del grafico (perchè l'abbiamo creata noi)
donutChart.options.plugins.legend.display = false;

//impostiamo una percentuale di "taglio" per la ciambella (effetto buco centrale)
donutChart.options.cutout = 150;

//definiamo una funzione per aggiornare i dati del grafico
const updateChart = function (correctAnswers, wrongAnswers) {
  donutChart.data.datasets[0].data = [wrongAnswers, correctAnswers]; //aggiorniamo i dati delle fette
  donutChart.update(); //aggiorniamo il grafico con i nuovi dati
};

//chiamiamo la funzione "updateChart" con i dati iniziali (con l'operatore ternario ci assicuriamo che le percentuali non siano a 0.
//nel caso lo fossero, setta a 1 le risposte sbagliate e a 0 quelle corrette nel grafico.)
updateChart(
  correctAnswer,
  (correctAnswer !== 0 || wrongAnswer !== 0) &&
    correctAnswer + wrongAnswer === questionsNumber
    ? wrongAnswer
    : 1
);

correctAnswersText.textContent = correctPercentage + "%";
correctAnswersText.style.opacity =
  correctPercentage > 30 ? correctPercentage / 100 : 0.3;
wrongAnswersText.style.opacity =
  wrongPercentage > 30 ? wrongPercentage / 100 : 0.3;
wrongAnswersText.textContent = wrongPercentage + "%";
spanCorrectText.textContent = correctAnswer + "/" + questionsNumber + " ";
spanWrongAnswersText.textContent = wrongAnswer + "/" + questionsNumber;

//otteniamo l'elemento HTML con id "custom-legend"
let customLegend = document.getElementById("custom-legend");

if (correctPercentage !== NaN || correctPercentage < 60) {
  customLegend.innerHTML = `<div class="text-inside-graph">
                              <p>
                                <span id="not-passed-text">We're Sorry :(</span
                                ><br /><span class="legend-not-passed-color"
                                  >You didn't pass the exam.</span
                                ><br /><br />you failed, <br>but you'll be luckier next time.
                              </p>
                            </div>`;
} else {
  examPassed = true;
}

// customLegend.innerHTML += `<div><p>Congratulations!<br><span class="legend-color">You passed the exam.</span><br><br>we'll send you a certificate in a few minutes.<br>check your email (including promotions / spam folder</div>`;

//impostiamo la larghezza dell'elemento "customLegend" basandoci sulla larghezza del grafico
customLegend.style.width = `${donutChart.width - 140}px`;
// customLegend.style.height = `${donutChart.height - 120}px`;

//per cambiare pagina. passa come query parameters se l'utente è stato promosso o bocciato (serve per il certificato.)
const changePage = function () {
  if (examPassed) {
    const url = `../feedback page/index.html?passed=true`;
    window.location.href = url;
  } else {
    const url = `../feedback page/index.html?passed=false`;
    window.location.href = url;
  }
};
