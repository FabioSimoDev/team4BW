const data = {
  labels: ["Risposte Corrette", "Risposte Sbagliate"],
  datasets: [
    {
      data: [0, 0],
      backgroundColor: ["#C2128D", "#00FFFF"]
    }
  ]
};

let ctx = document.getElementById("donut-chart").getContext("2d");

let donutChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: {
    cutoutPercentage: 80,
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  }
});
donutChart.options.plugins.legend.display = false;
donutChart.options.cutout = 150;

function updateChart(correctAnswers, wrongAnswers) {
  donutChart.data.datasets[0].data = [wrongAnswers, correctAnswers];
  donutChart.update();
}

updateChart(6, 4);

let customLegend = document.getElementById("custom-legend");

// customLegend.innerHTML += `<div><p>Congratulations!<br><span class="legend-color">You passed the exam.</span><br><br>we'll send you a certificate in a few minutes.<br>check your email (including promotions / spam folder</div>`;

customLegend.style.width = `${donutChart.width - 140}px`;
// customLegend.style.height = `${donutChart.height - 120}px`;

const allOptions = [];
allOptions.push();
