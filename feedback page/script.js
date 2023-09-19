// codice JavaScript della pagina

const starDiv = document.getElementById("star");
const array = [];
for (i = 0; i < 10; i++) {
  //ciclo per creare le 10 stelle aggiungerle all'array di stelle e appenderle al div star
  const stars = document.createElement("i");
  stars.classList.add("fas");
  stars.classList.add("fa-star");
  stars.classList.add("blue");

  array.push(stars);
  starDiv.appendChild(array[i]);
  stars.addEventListener("click", (e) => {
    //aggiunto l'event listener su ciascuna stella
    let length = array.indexOf(e.target); //ricavo l'indice della stella premuta

    if (e.target.classList.contains("blue")) {
      // creo un if per capire se la stella e' blu o azzurra
      for (j = 0; j <= length; j++) {
        // se e' blu rimuovo la classe blu e aggiungo quella azzurra atutte le precedenti
        array[j].classList.add("white");
        array[j].classList.remove("blue");
      }
    } else {
      for (j = length + 1; j < 10; j++) {
        //se e' azzurra rimuovo la classe azzurra e aggiungo quella blu a tutte le seguenti
        array[j].classList.add("blue");
        array[j].classList.remove("white");
      }
    }
  });
}
