
//Funcion para mostrar los ingredientes seleccionados.
function verToppings() {
    //Selecciona todos los ingredientes que estan seleccionados.
    let checkboxes = document.querySelectorAll('input[name="toppings"]:checked');

    //Selecciona el div para mostrar los datos.
    let ingredientesDiv = document.getElementById('pizza');
    
    // Limpiar contenido previo
    ingredientesDiv.innerHTML = '<h3>Ingredientes</h3>';

    //Si hay alguna checkbox seleccionada.
    if (checkboxes.length > 0) {
        for (let i = 0; i < checkboxes.length; i++) {
            let ingrediente = checkboxes[i].value;

            //Añade a la lista cada uno de los ingredientes seleccionados.
            ingredientesDiv.innerHTML += '<p>' + ingrediente + '</p>';
        }
    } else {
        //Muestra este mensaje si no se ha seleccionado ninguno ingrediente.
        ingredientesDiv.innerHTML += '<p>Ningún ingrediente seleccionado</p>';
    }
}

function tipoMasa() {

    //Selecciona el tipo de masa que ha indicado el usuario.
    let masaSeleccionada = document.querySelector('input[name="masa"]:checked');

    //Selecciona el div donde se va a mostrar el tipo de masa seleccionada.
    let tipoMasaDiv = document.getElementById('tipoMasa');
    let relleno = document.getElementById("rellenaOptions");

    // Limpiar contenido previo.
    tipoMasaDiv.innerHTML = '<h3>Tipo de masa</h3>';

    //Si el tipo de masa seleccionada no es la Rellena, la escribe en el html.
    if (masaSeleccionada.value!="Rellena") {
        tipoMasaDiv.innerHTML += '<p>' + masaSeleccionada.value + '</p>';
    }
    //Si la masa seleccionada es la rellena, añade un select para indicar el relleno.
    else if(masaSeleccionada.value="Rellena"){
            tipoMasaDiv.innerHTML+='<p>' + masaSeleccionada.value + ' (' + relleno.value + ')' +'</p>';
    }
    //Si no selecciona nada muestra un mensaje.
    else {
        tipoMasaDiv.innerHTML += '<p>Ningún tipo de masa seleccionado</p>';
    }
}

function pedido() {
    tipoMasa();
    verToppings();
}

document.addEventListener('DOMContentLoaded', function () {
    let masaRadios = document.querySelectorAll('input[name="masa"]');
    let rellenaOptions = document.getElementById('rellenaOptions');

    // Función para manejar el cambio en los radios de masa
    function handleMasaChange() {
        // Verificar si el radio seleccionado es "Rellena"
        let rellenaRadio = document.getElementById('rellena');
        if (rellenaRadio.checked) {
            rellenaOptions.style.display = 'block'; // Mostrar el select
        } else {
            rellenaOptions.style.display = 'none'; // Ocultar el select
        }
    }

    // Agregar evento de cambio a cada radio de masa
    masaRadios.forEach(function (radio) {
        radio.addEventListener('change', handleMasaChange);
    });

    // Llamar a la función para establecer el estado inicial del select
    handleMasaChange();
});