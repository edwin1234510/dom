let win = window;

let imagen = document.querySelectorAll("img");
let script = document.querySelectorAll("script");

let lista = document.querySelectorAll("ul.list > li.item")
let carta = document.querySelector("div.cards")
console.log("padre ", carta.parentElement);
console.log("hermano ", carta.previousElementSibling);
console.clear();

let elemento = document.querySelector("#elementos2");
elemento.textContent = "nuevo texto";
elemento.innerHTML = ` <p> texto </p> <p> texto </p>`;

let body = document.querySelector("body");
setTimeout(() => {
  body.classList.add("bg-red");
}, 6000);


console.log(body.classList);

