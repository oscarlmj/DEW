function validar() {
    const correoInput = document.getElementById('correo');
    const resultado = document.getElementById('resultado');

    alert(correoInput)
    // Expresión regular para validar el formato de un correo electrónico
    const regexCorreo = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;

    if (regexCorreo.test(correoInput.value)) {
        resultado.innerHTML = "¡Correo electrónico válido!";
    } else {
        resultado.innerHTML = "Correo electrónico no válido. Por favor, inténtalo de nuevo.";
    }
}