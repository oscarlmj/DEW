let datos = [];

function agregarDatos() {
  let apellidos = document.getElementById('apellidos').value;
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('correo').value;
  let sexo = document.querySelector('input[name="sexo"]:checked');
  let opcion = document.getElementById('opcion').value;
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  
  if( && nombre && email && sexo && opcion && checkboxes)
  if (!emailValido(email) || !sexo) {
    alert('Por favor comprueba el correo.');
  } else {
    const infoExtra = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        infoExtra.push(checkboxes[i].value);
      }
    }
    
    const nuevoDato = {
      apellidos: apellidos,
      nombre: nombre,
      email: email,
      sexo: sexo.value,
      opcion: opcion,
      infoExtra: infoExtra
    };
  
    datos.push(nuevoDato);
    limpiarFormulario();
  }
}

function visualizarDatos() {
  if (datos.length > 0) {
    let mensaje = 'Datos:\n';
    for (let i = 0; i < datos.length; i++) {
      const dato = datos[i];
      mensaje += 'Apellidos: ' + dato.apellidos + '\n';
      mensaje += 'Nombre: ' + dato.nombre + '\n';
      mensaje += 'Email: ' + dato.email + '\n';
      mensaje += 'Sexo: ' + dato.sexo + '\n';
      mensaje += 'Opción: ' + dato.opcion + '\n';
      mensaje += 'Información Extra: ' + dato.infoExtra.join(', ') + '\n\n';
    }
    alert(mensaje);
    document.getElementById("mostrar-resultado").innerHTML = mensaje + '\n';
  } else {
    alert('No hay datos para visualizar.');
  }
}

function eliminarSeleccion() {
  datos = [];
  limpiarFormulario();
}

function limpiarFormulario() {
  document.getElementById('apellidos').value = '';
  document.getElementById('nombre').value = '';
  document.getElementById('correo').value = '';
  document.querySelector('input[name="sexo"]:checked').checked = false;
  document.getElementById('opcion').value = 'buscador';
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => checkbox.checked = false);
}

function emailValido(email) {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexEmail.test(email);
}