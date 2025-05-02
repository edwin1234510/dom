

//--------------importacioes--------------------
import { validar } from "./module.js";
//------------variables-------------------
// let btn = document.querySelector("#btn_validar");
const formulario = document.querySelector("form");
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const contasena = document.querySelector('[name="contasena"]');
const politicas = document.querySelector('#politicas');
const boton = document.querySelector('#btn_validar')
const ciudad = document.querySelector('[name="ciudad"]')
// const genero = document.querySelectorAll('#genero')

//----------------funciones---------------------------
const limpiar = (evento) => {
  if (evento.target.value !== "") {
    evento.target.classList.remove("error");
    if (evento.target.nextElementSibling) {
      evento.target.nextElementSibling.remove();
    }
  }
}
const acepta = () => {
  if (!politicas.checked) {
    boton.setAttribute('disabled', ' ');
  }
  else {
    boton.removeAttribute('disabled');
  }
}
nombre.getAttribute
//----------------eventos-------------------------------


// const validar = (event) => {
//   event.preventDefault()
//   if (nombre.value == "") {
//     if (nombre.nextElementSibling) {
//       nombre.nextElementSibling.remove();
//     }
//     nombre.focus();
//     nombre.classList.add("error");
//     let afterend = document.createElement("span");
//     afterend.textContent = "ingrese un nombre";
//     nombre.insertAdjacentElement("afterend", afterend);
//   }
//   if (apellido.value == "") {
//     if (apellido.nextElementSibling) {
//       apellido.nextElementSibling.remove();
//     }
//     apellido.focus();
//     apellido.classList.add("error");
//     let afterend = document.createElement("span");
//     afterend.textContent = "ingrese un apellido";
//     apellido.insertAdjacentElement("afterend", afterend);
//   }
//   if (telefono.value == "") {
//     if (telefono.nextElementSibling) {
//       telefono.nextElementSibling.remove();
//     }
//     telefono.focus();
//     telefono.classList.add("error");
//     let afterend = document.createElement("span");
//     afterend.textContent = "ingrese un telefono";
//     telefono.insertAdjacentElement("afterend", afterend);
//   }
//   if (documento.value == "") {
//     if (documento.nextElementSibling) {
//       documento.nextElementSibling.remove();
//     }
//     documento.focus();
//     documento.classList.add("error");
//     let afterend = document.createElement("span");
//     afterend.textContent = "ingrese un documento";
//     documento.insertAdjacentElement("afterend", afterend);
//   }
//   if (usuario.value == "") {
//     if (usuario.nextElementSibling) {
//       usuario.nextElementSibling.remove();
//     }
//     usuario.focus();
//     usuario.classList.add("error");
//     let afterend = document.createElement("span");
//     afterend.textContent = "ingrese un usuario";
//     usuario.insertAdjacentElement("afterend", afterend);
//   }
//   if (contasena.value == "") {
//     if (contasena.nextElementSibling) {
//       contasena.nextElementSibling.remove();
//     }
//     contasena.focus();
//     contasena.classList.add("error");
//     let afterend = document.createElement("span");
//     afterend.textContent = "ingrese un contaseña";
//     contasena.insertAdjacentElement("afterend", afterend);
//   }
// }
addEventListener("DOMContentLoaded", acepta)
politicas.addEventListener("change", acepta);
formulario.addEventListener("submit", validar);
nombre.addEventListener("blur", limpiar);
apellido.addEventListener("blur", limpiar);
telefono.addEventListener("blur", limpiar);
documento.addEventListener("blur", limpiar);
usuario.addEventListener("blur", limpiar);
contasena.addEventListener("blur", limpiar);
ciudad.addEventListener("blur", limpiar);
// genero.addEventListener("blur", limpiar)
//-------------validar campos--------------------------
const validarLetras = (e) => {
  const letras = /^[a-zA-Z\s]/;
  if (!letras.test(e.key)) {
    e.preventDefault();
  }
}
nombre.addEventListener("keydown", validarLetras);
apellido.addEventListener("keydown", validarLetras);

const validarNumero = (e) => {
  const numeros = /[0-9]/;
  if (!numeros.test(e.key) && e.key != "Backspace") {
    e.preventDefault();
  }
}
telefono.addEventListener("keydown", validarNumero);
documento.addEventListener("keydown", validarNumero);

const cantidadCaracteres = (e) => {
  let palabra = e.target.value;
  if (palabra.length >= 2) {
    e.preventDefault();
  }
}

nombre.addEventListener("keydown", cantidadCaracteres); 