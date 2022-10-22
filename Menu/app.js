

let Menulateral = document.querySelector(".Menulateral");
let closeBtn = document.querySelector("#btn");
let inicioBtn = document.querySelector(".bx-grid-alt");

closeBtn.addEventListener("click", ()=>{ // O menu abre ao clicar no icone de Menu.
  Menulateral.classList.toggle("open");
 });

inicioBtn.addEventListener("click", ()=>{ // O menu abre ao clicar no botao de inicio.
  Menulateral.classList.toggle("open");
});
