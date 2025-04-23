let padre = document.querySelector(".container");
let nodo = document.createElement("h2");
nodo.textContent = "titulo de segundo nivel";
let texto = document.createTextNode("palabra para el nodo de texto");
padre.appendChild(nodo);
padre.appendChild(texto);

let lista = document.querySelector("#list");

let item1 = document.createElement("li");
let item2 = document.createElement("li");
let item3 = document.createElement("li");

item1.classList = "item";
item2.classList = "item";
item3.classList = "item";

item1.textContent = "HTML";
item2.textContent = "CSS";
item3.textContent = "JS";

lista.append(item1, item2, item3);




let card = document.querySelector(".card");
let titulo = document.createElement("h2");
titulo.textContent = "titulo de la card";
// card.append(titulo);
// card.insertBefore(titulo);
let lista_card = card.querySelector("#list");
card.insertBefore(titulo, lista_card)

let beforebegin = document.createElement("li");
beforebegin.classList.add("item", "before");
beforebegin.textContent = "nuevo contenido ubicado antes de lista ordenada";

let afterbegin = document.createElement("li");
afterbegin.classList.add("item");
afterbegin.textContent = "nuevo contenido ubicado al inicio de la lista ordenada";

let beforeend = document.createElement("li");
beforeend.classList.add("item", "before");
beforeend.textContent = "nuevo contenido ubicado al final de la lista ordenada";

let afterend = document.createElement("li");
afterend.classList.add("item");
afterend.textContent = "nuevo contenido ubicado despues de la lista ordenada";

lista_card.insertAdjacentElement("beforebegin", beforebegin);
lista_card.insertAdjacentElement("beforeend", beforeend);
lista_card.insertAdjacentElement("afterbegin", afterbegin);
lista_card.insertAdjacentElement("afterend", afterend);

//los de dias de la semana 

let card_dia = document.querySelector("#dias");
const dias = [
  {
    id: 1,
    name: "lunes",
    img: "https://picsum.photos/640/360",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquam?"
  },
  {
    id: 2,
    name: "martes",
    img: "https://picsum.photos/640/360",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquam?"
  },
  {
    id: 3,
    name: "miercoles",
    img: "https://picsum.photos/640/360",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquam?"
  },
  {
    id: 4,
    name: "jueves",
    img: "https://picsum.photos/640/360",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquam?"
  },
  {
    id: 5,
    name: "viernes",
    img: "https://picsum.photos/640/360",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquam?"
  },
  {
    id: 6,
    name: "sabado",
    img: "https://picsum.photos/640/360",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquam?"
  },
  {
    id: 7,
    name: "domingo",
    img: "https://picsum.photos/640/360",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquam?"
  }
]

dias.map((dia) => {
  console.log(dia);
  let card = document.createElement("div");
  let card_header = document.createElement("div");
  let title = document.createElement("h2");
  let card_body = document.createElement("div");
  let parrafo = document.createElement("p");
  let imagen = document.createElement("img");

  parrafo.classList.add("card__paragraph");
  card_header.classList.add("card__header")
  card.classList.add("card");
  title.classList.add("card__title");
  card_body.classList.add("card__body");
  imagen.classList.add("card__img");

  imagen.setAttribute("src", dia.img);
  imagen.setAttribute("alt", dia.nombre)

  title.textContent = dia.name;
  parrafo.textContent = dia.paragraph;

  card_body.append(imagen, parrafo);
  card_header.append(title);
  card.append(card_header, card_body);
  card_dia.append(card);
})