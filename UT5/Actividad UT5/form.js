const objeto= {
  "visa": /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
  "mastercard": /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
  "amex": /^3[47][0-9-]{16}$/,
  "diners": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/
}

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
    if (esValido)
      // Puedes enviar el formulario o realizar otras acciones aquí
      if(validarEdad() && validarExpediente() && validarFecha && validarNombreApellido() && validarImporte() && validarAño() && validarMes() && validarTarjeta())
        alert("Formulario válido. Puedes realizar alguna acción aquí.");
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

  function validarImporte()
  {
    let importe = document.getElementById("importe").value.trim();
    let numeros = /^\d+$/;
    let esValido = true;

    if(!numeros.test(importe))
    {
      esValido = false;
      alert("Por favor introduzca correctamente el importe");
    }

      return esValido;
  }

  function validarMes(){
    let mes = document.getElementById("mes").value.trim();
    let esValido = true;

    if(mes<1 || mes>12)
    {
      esValido = false;
      alert("Introduzca correctamente el mes de expiración(1-12)");
    }

    return esValido;
  }

  function validarAño(){
    let anio = document.getElementById("año").value.trim();
    let esValido = true;

    if(mes<2001 || mes>2100)
    {
      esValido = false;
      alert("Introduzca correctamente el año de expiración(1-12)");
    }

    return esValido;
  }


  function validarTarjeta(){
    let tarjeta=document.getElementById("tarjeta").value;
    let tipo = document.getElementById("tipo").value;
    let esValido = true;
    console.log("Hola");
    try {
        if(tarjeta!== "")
        {
            for(let card in objeto)
            {
                let patron=objeto[card];
                if(patron.test(tarjeta) && tipo===card)
                {
                    alert("Datos de la tarjeta introducidos correctamente.");
                    return true;
                }
                else
                {
                  esValido = false;
                }
            }
            if(esValido == false)
            {
              alert("Por favor, revisa los datos de la tarjeta.");
              return false;
            }
        }
        else throw new Error("Por favor introduce un número de tarjeta");
    } catch (error) {
        alert("Por favor revisa los datos de la tarjeta");
    }
}