function escribirContenido() {
    const texto = document.getElementById('textoEntrada').value;
    const seleccion = document.querySelector('input[name="seleccionContenedor"]:checked').value;

    const contenedorId = seleccion === 'izquierdo' ? 'contenedor-izquierdo' : 'contenedor-derecho';
    const contenedor = document.getElementById(contenedorId);

    // Agrega el texto al contenido existente
    contenedor.innerHTML += '<p>' + texto + '</p>';
}

function reiniciarContenido() {
    document.getElementById('textoEntrada').value = '';
}

function mostrarNombresContenedores() {
    const nombreIzquierdo = "Contenedor Izquierdo";
    const nombreDerecho = "Contenedor Derecho";
    alert(nombreIzquierdo + ", " + nombreDerecho);
}