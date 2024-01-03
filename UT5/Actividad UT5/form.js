function validarFormulario() {
    // Obtener todos los elementos de formulario
    var form = document.getElementById("formularioMatricula");
    var elementos = form.elements;
  
    // Bandera para verificar la validez
    var esValido = true;
  
    // Recorrer todos los elementos de formulario
    for (var i = 0; i < elementos.length; i++) {
      // Verificar solo los campos de texto
      if (elementos[i].type === "text") {
        // Verificar si el campo está vacío
        if (elementos[i].value.trim() === "") {
          alert("Por favor, complete todos los campos.");
          esValido = false;
          break; // Puedes quitar este break si deseas verificar todos los campos en lugar de detenerse en el primero vacío
        }
        // Puedes agregar más lógica de validación según tus requisitos
      }
    }
  
    // Si todos los campos son válidos, realizar alguna acción
    if (esValido) {
      alert("Formulario válido. Puedes realizar alguna acción aquí.");
      // Puedes enviar el formulario o realizar otras acciones aquí
      if(validarNombreApellido())
      {
        alert("Nombre correcto");
        if(validarExpediente())
        {
          alert("Numero de expediente correcto");
          if(validarEdad())
          {
            alert("Edad correcta");
            if(validarFecha())
            {
              alert("Fecha correcta");
            }
          }
        }
      }
    }
  }

  function validarNombreApellido(){
    let nombre= document.getElementById("nombre").value.trim();
    let apellido1=document.getElementById("apellido1").value.trim();
    let apellido2=document.getElementById("apellido2").value.trim();

    let patron = /^[A-Za-z]+$/;

    let esValido = true;

    if(patron.test(nombre) && patron.test(apellido1) && patron.test(apellido2))
      esValido = true;
    else
    {
      esValido = false;
      alert("Por favor introduzca correctamente su Nombre y Apellidos");
    }

    return esValido;
  }

  function validarExpediente(){
    let expendiente = document.getElementById("expediente").value.trim();
    let esValido = true;

    if(expendiente<340000000000 || expendiente>349999999999)
    {
      esValido = false;
      alert("Introduce un numero de expediente válido");
    }
    else
      esValido = true;

      return esValido
  }

  function validarEdad(){
    let edad = document.getElementById("edad").value;
    let esValido = true;

    if(edad<18 || edad>120)
    {
      esValido = false;
      alert("Su edad está fuera del rango permitido");
    }

    return esValido;
  }

  function validarFecha(){
    console.log("Holaaaa");
    let fechaUsuario = document.getElementById("fecha").value;
    let fechaPermiso = new Date(fechaUsuario);
    let fechaActual = new Date();
    let esValido = true;

    if(fechaPermiso > fechaActual)
    {
      return esValido;
    }
    else
    {
      esValido = false;
      alert("Por favor introduce una fecha válida");

    }

    return esValido;
  }