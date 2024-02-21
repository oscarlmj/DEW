function validarColores() {
    const rojo = document.getElementById("rojoInput").value;
    const verde = document.getElementById("verdeInput").value;
    const azul = document.getElementById("azulInput").value;

    if (rojo === "" || verde === "" || azul === "") {
        alert("Por favor, complete todos los campos");
        return false;
    }

    if (rojo < 0 || rojo > 255 || verde < 0 || verde > 255 || azul < 0 || azul > 255) {
        alert("Los valores de los colores deben estar entre 0 y 255");
        return false;
    }

    return true;
}

function cambiarColor() {
    if (validarColores()) {
        const rojo = document.getElementById("rojoInput").value;
        const verde = document.getElementById("verdeInput").value;
        const azul = document.getElementById("azulInput").value;

        const opcion = document.getElementById("atributoSelect").value;
        localStorage.setItem("opcion", opcion);

        localStorage.setItem("color", `rgb(${rojo},${verde},${azul})`);
    }
}