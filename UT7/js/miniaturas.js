function abrirImagen(imagen) {
    let img = "./img/Miniaturas/Arte/" + imagen;
    window.open("./miniaturas2.html?imagen=" + imagen, "_blank");
}

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

const imagenNombre = getQueryParam('imagen');

if (imagenNombre) {
    const imagenContainer = document.getElementById('imagenGrande');
    imagenContainer.src = "../img/Miniaturas/Arte/" + imagenNombre;
}