const modoOscuro = document.getElementById("modoOscuro");
const menu = document.getElementById("menu");
const munus = document.getElementById("munus");

modoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("body");
  munus.classList.toggle("menus--color");
});

menu.addEventListener("click", () => {
  munus.classList.toggle("menus__none");
});
