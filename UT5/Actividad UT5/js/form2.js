let datos = [];

function agregarDatos() {
  const apellidos = document.getElementById("apellidos").value;
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("correo").value;
  const sexo = document.querySelector('input[name="sexo"]:checked');
  const opcion = document.getElementById("opcion").value;
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );

  if (!emailValido(email) || !sexo) {
    alert("¡Ups! Parece que olvidaste completar algunos campos.");
    return;
  }

  const infoExtra = Array.from(checkboxes).map((checkbox) => checkbox.value);

  const nuevoDato = {
    apellidos,
    nombre,
    email,
    sexo: sexo.value,
    opcion,
    infoExtra,
  };

  datos.push(nuevoDato);
  limpiarFormulario();
}

function visualizarDatos() {
  if (datos.length === 0) {
    alert("No hay datos para visualizar.");
    return;
  }

  const mensaje = datos
    .map((dato) => {
      return `Apellidos: ${dato.apellidos}\nNombre: ${dato.nombre}\nEmail: ${
        dato.email
      }\nSexo: ${dato.sexo}\nOpción: ${
        dato.opcion
      }\nInformación Extra: ${dato.infoExtra.join(", ")}\n\n`;
    })
    .join("");

  alert("Datos:\n" + mensaje);
  document.getElementById("mostrar-resultado").innerHTML = mensaje;
}

function eliminarSeleccion() {
  datos = [];
  limpiarFormulario();
}

function limpiarFormulario() {
  document.getElementById("apellidos").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("correo").value = "";
  document.querySelector('input[name="sexo"]:checked').checked = false;
  document.getElementById("opcion").value = "buscador";
  document
    .querySelectorAll('input[type="checkbox"]:checked')
    .forEach((checkbox) => (checkbox.checked = false));
}

function emailValido(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}
