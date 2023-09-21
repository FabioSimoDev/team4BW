//cerchiamo i query parameters dall'url della pagina usando window.location
const url = window.location; //otteniamo la pagina
const parameters = new URLSearchParams(url.search); //cerchiamo se ci sono dei parametri

let name;
let lastName;
let email;
let date;

//verifichiamo che ci siano i query parameters corretti
if (
  parameters.has("name") &&
  parameters.has("lastName") &&
  parameters.has("email") &&
  parameters.has("date")
) {
  //se ci sono i query parameters corretti, li salviamo in variabili
  name = parameters.get("name");
  lastName = parameters.get("lastName");
  email = parameters.get("email");
  date = parameters.get("date");
}
