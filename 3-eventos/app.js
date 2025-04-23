


//variables
// let btn = document.querySelector("#btn_validar");
const formulario = document.querySelector("form");
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const contasena = document.querySelector('[name="contasena"]');
//funciones
//eventos
const validar = (event) => {
  event.preventDefault()
  if (nombre.value == "") {
    alert("ingrese un nombre");
    nombre.focus();
  }
}
formulario.addEventListener("submit", validar);

