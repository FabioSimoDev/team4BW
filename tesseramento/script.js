//variabili
const name = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const date = new Date();

//array che conterrà tutti gli elementi del form
const arr = [];
arr.push(name);
arr.push(lastName);
arr.push(email);

//creiamo la funzione changePage, per cambiare pagina  passando i query parameters.
const changePage = function (btn) {
  let compiled = true;
  //rendo tutti i campi obbligatori
  arr.forEach((element) => {
    if (element.value.trim() === "") {
      console.log(element, element.value);
      compiled = false;
      btn.classList.add("button-required-anim");

      setTimeout(() => {
        btn.classList.remove("button-required-anim");
      }, 600);
    }
  });
  if (!compiled) {
    return;
  }
  //creiamo la url da passare come parametro alla funzione location.href che permette di cambiare pagina con query parameters
  const url = `certificate.html?name=${name.value}&lastname=${
    lastName.value
  }&email=${email.value}&date=${date.toLocaleDateString()}`;
  window.location.href = url;
};
