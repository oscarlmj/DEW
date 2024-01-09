document.getElementById("categorias").addEventListener("change", function () {
    actualizarSubcategorias();
    actualizarResultado();
});

document.getElementById("subcategorias").addEventListener("change", function () {
    actualizarResultado();
});

function actualizarSubcategorias() {
    let categorias = document.getElementById("categorias");
    let subcategorias = document.getElementById("subcategorias");

    // Limpiar subcategorias anteriores
    subcategorias.innerHTML = "";

    // Obtener la opción seleccionada
    let opcionSeleccionada = categorias.value;

    // Definir las subcategorías según la opción seleccionada
    let subcategoriasOpciones = [];
    switch (opcionSeleccionada) {
        case "video":
            subcategoriasOpciones = ["Humor", "Drama", "Ficción", "Otros"];
            break;
        case "discos":
            subcategoriasOpciones = ["Pop", "Rock", "Latino", "Otros"];
            break;
        case "juegos":
            subcategoriasOpciones = ["Simulador", "Rol", "Medieval", "Otros"];
            break;
        default:
            break;
    }

    // Llenar las subcategorías en el segundo select
    subcategoriasOpciones.forEach(function (opcion) {
        let opcionElemento = document.createElement("option");
        opcionElemento.value = opcion;
        opcionElemento.text = opcion;
        subcategorias.add(opcionElemento);
    });
}

function actualizarResultado() {
    let categorias = document.getElementById("categorias").value;
    let subcategorias = document.getElementById("subcategorias").value;
    let resultado = document.getElementById("resultado");

    resultado.value = "Texto de " + categorias.charAt(0).toUpperCase() + categorias.slice(1) + " -> " + subcategorias;
}

// Llamar a la función al cargar la página para tener valores iniciales
actualizarSubcategorias();
actualizarResultado();
