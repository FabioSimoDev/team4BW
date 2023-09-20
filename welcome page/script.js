// codice JavaScript della pagina
const checkboxes = document.querySelectorAll(
  "#difficult-checkboxs input[type=checkbox]"
);

const checkBoxLimiter = function (e) {
  // la farà nemanja
  //const selectedCheckbox = e;
  //checkboxes.forEach((element) => {
  //  if (element.checked && element !== selectedCheckbox) {
  //    console.log("ciao");
  //  }
  //});
  let selectedCheckbox;
  checkboxes.forEach((element) => {
    if (element.checked) {
      selectedCheckbox = element;
    }
    if (selectedCheckbox !== undefined) {
      selectedCheckbox.checked = false;
      if (selectedCheckbox !== e) {
        selectedCheckbox.checked = false;
        e.checked = true;
      }
    }
  });
};
