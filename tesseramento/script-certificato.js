//cerchiamo i query parameters dall'url della pagina usando window.location
const url = window.location; //otteniamo la pagina
const parameters = new URLSearchParams(url.search); //cerchiamo se ci sono dei parametri

let name;
let lastName;
let email;
let date;
console.log(
  parameters.get("name"),
  parameters.get("lastname"),
  parameters.get("email"),
  parameters.get("date")
);
//verifichiamo che ci siano i query parameters corretti
if (
  parameters.has("name") &&
  parameters.has("lastname") &&
  parameters.has("email") &&
  parameters.has("date")
) {
  //se ci sono i query parameters corretti, li salviamo in variabili
  name = parameters.get("name");
  lastName = parameters.get("lastname");
  email = parameters.get("email");
  date = parameters.get("date");
  console.log(name, lastName, email, date);
}

const date1 = document.getElementById("relase");
const name1 = document.getElementsByTagName("h3")[0];
name1.innerText = name + " " + lastName;
date1.value = date;

window.jsPDF = window.jspdf.jsPDF;
let docPDF = new jsPDF();

// quetsa funzione salva il file
const print = function () {
  // seleziona un elemento HTML con l'ID 'printTable' e assegna l'elemento selezionato a 'elementHTML'
  let elementHTML = document.body;

  // converte l'elemento HTML selezionato in un documento PDF utilizzando la libreria jsPDF
  docPDF.html(elementHTML, {
    html2canvas: {
      width: 900
    },

    // callback che viene eseguita una volta che la conversione è completata
    callback: function (docPDF) {
      // salva il documento PDF generato con il nome "certificato.pdf"
      docPDF.save("certificato.pdf");
    },
    // imposta la posizione orizzontale (x) del contenuto PDF generato, in questo caso a 15 unità
    x: -1,
    // imposta la posizione verticale (y) del contenuto PDF generato, in questo caso a 15 unità
    y: -5,
    // imposta la larghezza del contenuto PDF generato, in questo caso a 170 unità
    width: 210,
    // imposta la larghezza della finestra del browser quando viene generato il PDF, in questo caso a 650 unità
    windowWidth: 1920
  });
};

setTimeout(() => {
  print();
}, 3000);
