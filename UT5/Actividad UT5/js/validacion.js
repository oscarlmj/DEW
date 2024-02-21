const objeto = {
  visa: /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
  mastercard: /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
  amex: /^3[47][0-9-]{16}$/,
  diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
};

function validarFormulario() {
  let form = document.getElementById("formularioMatricula");
  let elementos = form.elements;
  let esValido = true;

  for (let i = 0; i < elementos.length; i++) {
    if (elementos[i].type === "text" && elementos[i].value.trim() === "") {
      alert("Por favor, complete todos los campos.");
      esValido = false;
      break;
    }
  }

  if (
    esValido &&
    validarEdad() &&
    validarExpediente() &&
    validarFecha() &&
    validarNombreApellido() &&
    validarImporte() &&
    validarAño() &&
    validarMes() &&
    validarTarjeta() &&
    validarMatricula()
  ) {
    alert("Formulario válido.");
  }
}

function validarNombreApellido() {
  let nombre = document.getElementById("nombre").value.trim();
  let apellido1 = document.getElementById("apellido1").value.trim();
  let apellido2 = document.getElementById("apellido2").value.trim();
  let patron = /^[A-Za-z]+$/;

  if (
    !patron.test(nombre) ||
    !patron.test(apellido1) ||
    !patron.test(apellido2)
  ) {
    alert("Por favor introduzca correctamente su Nombre y Apellidos");
    return false;
  }

  return true;
}

function validarExpediente() {
  let expediente = document.getElementById("expediente").value.trim();

  if (expediente < 340000000000 || expediente > 349999999999) {
    alert("Introduce un numero de expediente válido");
    return false;
  }

  return true;
}

function validarMatricula() {
  let matricula = document.getElementById("matricula").value.trim();
  let input =
    /NNNN[BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ]/;

  if (!input.test(matricula)) {
    alert("Introduce una matricula válida");
    return false;
  }

  return true;
}

function validarEdad() {
  let edad = document.getElementById("edad").value;

  if (edad === "" || edad < 18 || edad > 120) {
    alert("Su edad está fuera del rango permitido");
    return false;
  }

  return true;
}

function validarFecha() {
  let fechaUsuario = document.getElementById("fecha").value;
  let fechaPermiso = new Date(fechaUsuario);
  let fechaActual = new Date();

  if (fechaPermiso <= fechaActual) {
    alert("Por favor introduce una fecha válida");
    return false;
  }

  return true;
}

function validarImporte() {
  let importe = document.getElementById("importe").value.trim();
  let numeros = /^\d+$/;

  if (!numeros.test(importe)) {
    alert("Por favor introduzca correctamente el importe");
    return false;
  }

  return true;
}

function validarMes() {
  let mes = document.getElementById("mes").value.trim();

  if (mes < 1 || mes > 12) {
    alert("Introduzca correctamente el mes de expiración(1-12)");
    return false;
  }

  return true;
}

function validarAño() {
  let año = document.getElementById("año").value.trim();

  if (año < 2001 || año > 2100) {
    alert("Introduzca correctamente el año de expiración(2001-2100)");
    return false;
  }

  return true;
}

function validarTarjeta() {
  let tarjeta = document.getElementById("tarjeta").value;
  let tipo = document.getElementById("tipo").value;

  if (tarjeta === "") {
    alert("Por favor introduce un número de tarjeta");
    return false;
  }

  if (!objeto[tipo].test(tarjeta)) {
    alert("Por favor, revisa los datos de la tarjeta.");
    return false;
  }
  return true;
}
