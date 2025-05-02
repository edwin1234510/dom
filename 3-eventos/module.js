export const validar = (e) => {
  e.preventDefault();

  console.log(e.target.children);
  const campos = [...e.target].filter((elemento) => {
    if (elemento.hasAttribute('required')) {
      return elemento
    }
  })
  const radios = [...campos].filter((elementos) => {
    return elementos.type == "radio";
  })
  const checkbox = [...campos].filter((elemento) => {
    return elemento.type == "checkbox";
  })
  const obj = {}
  campos.forEach(campo => {
    switch (campo.tagName) {
      case 'INPUT':
        if (campo.value === "") {
          campo.classList.add("error");
          if (campo.nextElementSibling) {
            campo.nextElementSibling.remove();
          }
          let span = document.createElement("span");
          span.textContent = "el campo es obligatorio";
          campo.insertAdjacentElement("afterend", span);
        } else {
          let nombre = campo.getAttribute('name');
          obj[nombre] = campo.value;

        }
        break;
      case 'SELECT':
        if (campo.selectedIndex == 0) {
          campo.classList.add("error");
          if (campo.nextElementSibling) {
            campo.nextElementSibling.remove();
          }
          let span = document.createElement("span");
          span.textContent = "el campo es obligatorio";
          campo.insertAdjacentElement("afterend", span);
        } else {
          let nombre = campo.getAttribute('name');
          obj[nombre] = campo.value;
        }

        break;
      default:

        break;
    }
  });


  const campoRadio = radios.find((radio) => radio.checked) || [];
  if (campoRadio.length == 0) {
    obj[radios[0].name] = "";
  }
  else {
    obj[campoRadio.name] = campoRadio.value;
  }
  const campoCheck = checkbox.filter((e) => e.checked);
  if (campoCheck.length < 3) {
    obj[checkbox[0].name] = "";
  }
  else {
    obj[checkbox[0].name] = [...campoCheck].map((e) => e.value);

  }
  console.log(obj);
}