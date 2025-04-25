export const validar = (e) => {
  e.preventDefault();
  console.log(e.target.children);
  const campos = [...e.target].filter((elemento) => {
    if (elemento.hasAttribute('required')) {
      return elemento
    }
  })
  campos.forEach(campo => {
    if (campo.value === "") {
      campo.classList.add("error")
    }
    if (campo.nextElementSibling) {
      campo.nextElementSibling.remove();
    }
    let span = document.createElement("span");
    span.textContent = "el campo es obligatorio";
    campo.insertAdjacentElement("afterend", span);
  });
}