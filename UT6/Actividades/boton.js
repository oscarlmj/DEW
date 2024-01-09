let contenedor = document.getElementById("contenedor");
let boton = document.getElementById("pulsaBtn");

contenedor.addEventListener("mouseenter", function () {
    moverBoton();
});

function moverBoton() {
    // Obtener dimensiones del área disponible (contenedor)
    let contenedorAncho = contenedor.clientWidth - boton.clientWidth;
    let contenedorAlto = contenedor.clientHeight - boton.clientHeight;

    // Generar valores aleatorios para la posición del botón (aumentando el rango)
    let nuevaPosX = Math.max(Math.floor(Math.random() * (contenedorAncho)) *100, 0);
    let nuevaPosY = Math.max(Math.floor(Math.random() * (contenedorAlto)) * 100, 0);

    // Aplicar nueva posición al botón con transform para evitar salirse de la ventana
    boton.style.transform = `translate(${nuevaPosX}px, ${nuevaPosY}px)`;
}



function pillado()
{
    alert("Me has pillado uwu")
}
