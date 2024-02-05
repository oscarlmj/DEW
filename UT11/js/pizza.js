function verToppings() {
    var checkboxes = document.querySelectorAll('input[name="toppings"]:checked');
    var ingredientesDiv = document.getElementById('pizza');
    
    // Limpiar contenido previo
    ingredientesDiv.innerHTML = '<h3>Ingredientes</h3>';

    if (checkboxes.length > 0) {
        for (var i = 0; i < checkboxes.length; i++) {
            var ingrediente = checkboxes[i].value;
            ingredientesDiv.innerHTML += '<p>' + ingrediente + '</p>';
        }
    } else {
        ingredientesDiv.innerHTML += '<p>Ningún ingrediente seleccionado</p>';
    }
}

function tipoMasa() {
    var masaSeleccionada = document.querySelector('input[name="masa"]:checked');
    var tipoMasaDiv = document.getElementById('tipoMasa');
    let relleno = document.getElementById("rellenaOptions");

    // Limpiar contenido previo
    tipoMasaDiv.innerHTML = '<h3>Tipo de masa</h3>';

    if (masaSeleccionada.value!="Rellena") {
        tipoMasaDiv.innerHTML += '<p>' + masaSeleccionada.value + '</p>';
    }
    else if(masaSeleccionada.value="Rellena"){
            tipoMasaDiv.innerHTML+='<p>' + masaSeleccionada.value + ' (' + relleno.value + ')' +'</p>';
    }
    else {
        tipoMasaDiv.innerHTML += '<p>Ningún tipo de masa seleccionado</p>';
    }
}

function pedido() {
    tipoMasa();
    verToppings();
}

document.addEventListener('DOMContentLoaded', function () {
    var rellenaRadio = document.getElementById('rellena');
    var rellenaOptions = document.getElementById('rellenaOptions');

    rellenaRadio.addEventListener('change', function () {
        if (rellenaRadio.checked) {
            rellenaOptions.style.display = 'block';
        } else {
            rellenaOptions.style.display = 'none';
        }
    });
});