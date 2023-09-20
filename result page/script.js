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

//chiamiamo la funzione "updateChart" con i dati iniziali
updateChart(6, 4);

//otteniamo l'elemento HTML con id "custom-legend"
let customLegend = document.getElementById("custom-legend");

// customLegend.innerHTML += `<div><p>Congratulations!<br><span class="legend-color">You passed the exam.</span><br><br>we'll send you a certificate in a few minutes.<br>check your email (including promotions / spam folder</div>`;

//impostiamo la larghezza dell'elemento "customLegend" basandoci sulla larghezza del grafico
customLegend.style.width = `${donutChart.width - 140}px`;
// customLegend.style.height = `${donutChart.height - 120}px`;
