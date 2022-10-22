

let Menulateral = document.querySelector(".Menulateral");
let closeBtn = document.querySelector("#btn");
let inicioBtn = document.querySelector(".bx-grid-alt");
let searchBtn = document.querySelector(".bx-search");
let userBtn = document.querySelector(".bx-user");
let cartBtn = document.querySelector(".bx-cart-alt");
let chatBtn = document.querySelector(".bx-chat");
let folderBtn = document.querySelector(".bx-folder");
let icogBtn = document.querySelector(".bx-cog");

// O menu abre ao clicar nos botoes do menu.

closeBtn.addEventListener("click", ()=>{ 
  Menulateral.classList.toggle("open");
 });

inicioBtn.addEventListener("click", ()=>{ 
  Menulateral.classList.toggle("open");
});

searchBtn.addEventListener("click", ()=>{ 
    Menulateral.classList.toggle("open");
});

userBtn.addEventListener("click", ()=>{ 
    Menulateral.classList.toggle("open");
});

cartBtn.addEventListener("click", ()=>{ 
    Menulateral.classList.toggle("open");
});

chatBtn.addEventListener("click", ()=>{ 
    Menulateral.classList.toggle("open");
});  

folderBtn.addEventListener("click", ()=>{ 
    Menulateral.classList.toggle("open");
});

icogBtn.addEventListener("click", ()=>{ 
    Menulateral.classList.toggle("open");
});