


//------------variables-------------------
// let btn = document.querySelector("#btn_validar");
const formulario = document.querySelector("form");
const nombre = document.querySelector('[name="nombre"]');
const apellido = document.querySelector('[name="apellido"]');
const telefono = document.querySelector('[name="telefono"]');
const documento = document.querySelector('[name="documento"]');
const usuario = document.querySelector('[name="usuario"]');
const contasena = document.querySelector('[name="contasena"]');
//----------------funciones---------------------------

//----------------eventos-------------------------------
const validar = (event) => {
  event.preventDefault()
  if (nombre.value == "") {
    alert("ingrese un nombre");
    nombre.focus();
  }
  else if (apellido.value == "") {
    alert("ingrese un apellido");
    apellido.focus();
  }
  else if (telefono.value == "") {
    alert("ingrese un telefono");
    telefono.focus();
  }
  else if (documento.value == "") {
    alert("ingrese un documento");
    documento.focus();
  }
  else if (usuario.value == "") {
    alert("ingrese un usuario");
    usuario.focus();
  }
  else if (contasena.value == "") {
    alert("ingrese un contraseña");
    contasena.focus();
  }

}
formulario.addEventListener("submit", validar);

