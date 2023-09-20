// codice JavaScript della pagina

// usiamo querySelectorAll per reperire tutte le checkbox all'interno del contenitore 'difficult-checkboxs'
const checkboxes = document.querySelectorAll(
  "#difficult-checkboxs input[type=checkbox]"
);

const checkBoxLimiter = function (e) {
  let selectedCheckbox; //variabile che conterrà la checkbox selezionata
  checkboxes.forEach((element) => {
    //ciclo tutte le checkbox
    if (element.checked) {
      selectedCheckbox = element;
    }
  });

  //se una checkbox selezionata è stata trovata
  if (selectedCheckbox !== undefined) {
    //se la checkbox selezionata non è la stessa di quella cliccata
    if (selectedCheckbox !== e.children[0]) {
      selectedCheckbox.checked = false; //disabilita la checkbox che era precedentemente selezionata
      e.children.checked = true; //abilita la checkbox cliccata ora
    }
  }
};
