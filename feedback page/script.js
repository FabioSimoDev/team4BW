// codice JavaScript della pagina

// parametri
const url = window.location; //otteniamo la pagina
const parameters = new URLSearchParams(url.search); //cerchiamo se ci sono dei parametri
// se c'è il parametro "passed" lo salva, altrimenti torna undefined nella variabile.
let passedExam =
  parameters.has("passed") &&
  (parameters.get("passed") === "true" || parameters.get("passed") === "false")
    ? parameters.get("passed")
    : undefined;

const starDiv = document.getElementById("star"); //div contenente le stelle
const array = []; //array contenente le stelle

//ciclo per creare le stelle
for (let i = 0; i < 10; i++) {
  const stars = document.createElement("i"); //creiamo una stella
  stars.classList.add("fas"); //aggiungiamo la classe fas alla stella appena creata
  stars.classList.add("fa-star"); //aggiungiamo la classe fa-star alla stella
  stars.classList.add("blue"); //aggiugniamo la classe blue alla stella
  stars.classList.add(`${i + 1}`); //aggiungiamo la classe i+1 alla stella, in modo da poterle "identificare" separatamente

  array.push(stars); //aggiungiamo la stella all'array di stelle
  starDiv.appendChild(array[i]); //aggiungiamo la stella alla pagina

  //se la stella è cliccata
  stars.addEventListener("click", (e) => {
    //troviamo la posizione della stella cliccata
    let length = array.indexOf(e.target);
    //se la stella cliccata è già blu, la rimuoviamo
    //altrimenti la aggiungiamo
    if (e.target.classList.contains("blue")) {
      for (let j = 0; j <= length; j++) {
        array[j].classList.add("white");
        array[j].classList.remove("blue");
      }
    } else {
      for (let j = length + 1; j < 10; j++) {
        array[j].classList.add("blue");
        array[j].classList.remove("white");
      }
    }
  });

  //se il mouse passa sopra la stella
  stars.addEventListener("mouseover", (e) => {
    //troviamo la posizione della stella
    let length = array.indexOf(e.target);

    //stesso codice di sopra.
    if (e.target.classList.contains("blue")) {
      for (let j = 0; j <= length; j++) {
        array[j].classList.add("white0");
        array[j].classList.remove("blue0");
      }
    } else {
      for (let j = length + 1; j < 10; j++) {
        array[j].classList.add("blue0");
        array[j].classList.remove("white0");
      }
    }
  });

  stars.addEventListener("mouseleave", () => {
    //se il mouse lascia la stella
    //rimuoviamo la classe blue0 e white0 dalle stelle
    for (let j = 0; j < 10; j++) {
      array[j].classList.remove("white0");
      array[j].classList.remove("blue0");
    }
  });
}

const changePage = function (event) {
  //funzione per cambiare pagina
  if (passedExam === "true") {
    window.location.href = `../tesseramento/index.html?passed=${passedExam}`;
  } else {
    window.location.reload();
  }
};
