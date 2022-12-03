let settingsUl = new CreateSettingsList($("#listaPostavke"), firstTemplate);

const myDropdown = document.querySelector("div.parentffff");
myDropdown.addEventListener("hide.bs.dropdown", (event) => {
  event.preventDefault();
  return false;
});
let prviProzor = document.querySelector(".listaPostavke li:first-child");
prviProzor.addEventListener("click", function (e) {
  settingsUl.deleteElements();
  settingsUl.createElements();
});
let ul = document.querySelector(".listaPostavke");
ul.addEventListener("change", function () {
  let vratiNazadBtn = document.querySelector(".vratiNazad");
});
