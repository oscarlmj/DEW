// Cookies.js

// Función para grabar una cookie
function grabarCookie(nombre, valor, diasExpiracion) {
    let fechaExpiracion = new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
    let expiracion = "expires=" + fechaExpiracion.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

// Función para leer una cookie
function leerCookie(nombre) {
    let nombreEQ = nombre + "=";
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nombreEQ) == 0) {
            return cookie.substring(nombreEQ.length, cookie.length);
        }
    }
    return null;
}

// Función para borrar una cookie
function borrarCookie(nombre) {
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


document.addEventListener('DOMContentLoaded', function() {
    let nombreCookie = "Contador_Visitas2";
    let contador = leerCookie(nombreCookie);

    if (contador === null) {
        // La cookie no existe, configurar contador a 1
        contador = 1;
        grabarCookie(nombreCookie, contador, 365);
        alert("Bienvenido a la página de las cookies");
    } else {
        // La cookie existe, incrementar contador
        contador++;
        grabarCookie(nombreCookie, contador, 365);
        alert("Esta es su visita nº " + contador);
    }

    // Botón para borrar la cookie
    let botonBorrarCookie = document.getElementById("borrar");
    botonBorrarCookie.textContent = "BORRAR COOKIE";
    botonBorrarCookie.addEventListener("click", function() {
        borrarCookie(nombreCookie);
        alert("Cookie borrada");
    });

    document.body.appendChild(botonBorrarCookie);
});