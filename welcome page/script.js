// codice JavaScript della pagina

// usiamo querySelectorAll per reperire tutte le checkbox all'interno del contenitore 'difficult-checkboxs'
const checkboxes = document.querySelectorAll(
  "#difficult-checkboxs input[type=checkbox]"
);
const required = document.getElementById("newbut");
let selectedCheckBoxDefinitive;

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

      console.log(selectedCheckBoxDefinitive);
    }
  }
  selectedCheckBoxDefinitive = e; //salva la checkbox cliccata come quella definitiva
};

const changePage = function () {
  if (required.checked) {
    const difficulty = selectedCheckBoxDefinitive.textContent.trim();
    console.log(difficulty);
    const url = `../benchmark page/index.html?difficulty=${difficulty}`;
    window.location.href = url;
    //prima pagina.html --> prima pagina.html?difficulty+easy
    //seconda pagina.html --> const difficulty = difficulty (easy)
    //http://127.0.0.1:5500/welcome%20page/index.html --> http://127.0.0.1:5500/welcome%20page/index.html?difficulty=easy
  } else {
    required.parentElement.classList.add("checkbox-required-anim");
    const timer = setTimeout(() => {
      required.parentElement.classList.remove("checkbox-required-anim");
    }, 800);
  }
};
