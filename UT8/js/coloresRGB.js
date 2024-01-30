function comprobarValor(valor) {
    try {
        valor = parseInt(valor, 10);

        if (isNaN(valor) || valor < 0 || valor > 255) {
            throw new Error("El valor debe ser un número entre 0 y 255.");
        }

        return true;
    } catch (error) {
        alert(error);
        return false;
    }
}

try {
    let r = document.getElementById("rojo").value;
    let g = document.getElementById("verde").value;
    let b = document.getElementById("azul").value;

    // Verificar la longitud de las variables
    if (r.length !== 3 || g.length !== 3 || b.length !== 3) {
        throw new Error("Los valores deben tener una longitud de 3 caracteres.");
    }

    // Validar que los valores estén entre 0 y 255
    if (!comprobarValor(r) || !comprobarValor(g) || !comprobarValor(b)) {
        throw new Error("Los valores deben estar en el rango de 0 a 255.");
    }

    // Aquí continúa el resto del código si no ha ocurrido ninguna excepción.
    switch(document.getElementById("option").value)
    {
        case "bgColor":
            document.body
    }

} catch (error) {
    // Manejar la excepción y mostrar un mensaje de error
    console.error("Error:", error.message);
}