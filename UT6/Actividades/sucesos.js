var contenedor = document.getElementById("contenedor");
var textarea = document.getElementById("resultado");

contenedor.addEventListener("mouseover", function (event) {
    var target = event.target;
    if (target.classList.contains("boton") && !target.classList.contains("rojo")) {
        target.style.backgroundColor = "orchid";
    }
});

contenedor.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("boton") && !target.classList.contains("rojo")) {
        target.style.backgroundColor = "skyblue";
    }
});

var ultimoDobleClic = 0;

contenedor.addEventListener("dblclick", function (event) {
    var target = event.target;
    if (target.classList.contains("boton")) {
        target.style.backgroundColor = "red";
        target.classList.add("rojo");
        target.style.color = "white";
        textarea.value = target.getAttribute("data-texto");

        // Obtener el label asociado
        var labelFor = target.getAttribute("id");
        var label = document.querySelector(`label[for="${labelFor}"]`);

        // Cambiar el color de fondo del label asociado a coral
        if (label) {
            label.style.backgroundColor = "coral";
        }

        // Evitar doble clic rápido (dentro de 500 ms)
        var ahora = new Date().getTime();
        if (ahora - ultimoDobleClic < 500) {
            target.classList.remove("rojo");
            target.style.backgroundColor = "coral";
            target.style.color = "black";
            textarea.value = "";

            // Restaurar el color de fondo del label a su valor predeterminado
            if (label) {
                label.style.backgroundColor = "";
            }
        }
        ultimoDobleClic = ahora;
    }
});
