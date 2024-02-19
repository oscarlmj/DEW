class Articulo {
    constructor(codigo, descripcion, precio, imagen) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}

let articulos = [
    new Articulo("001", "Altavoces", 25, "../img/ALTAVOCES.GIF"),
    new Articulo("002", "DVD", 50, "../img/DVD.GIF"),
    new Articulo("003", "Impresora", 80, "../img/IMPRESORA.GIF"),
    new Articulo("004", "Tarjeta de red", 20, "../img/MODEMINTERNO.GIF"),
    // Agregar más artículos según sea necesario
];

function mostrarArticulos() {
    let tienda = document.getElementById("articulos");
    articulos.forEach(articulo => {
        let diletticulo = document.createElement("div");
        diletticulo.classList.add("articulo");

        let imagen = document.createElement("img");
        imagen.src = articulo.imagen;
        imagen.alt = articulo.descripcion;

        let titulo = document.createElement("h2");
        titulo.textContent = articulo.descripcion;

        let precio = document.createElement("p");
        precio.textContent = "Precio: $" + articulo.precio;

        let cantidadInput = document.createElement("input");
        cantidadInput.type = "number";
        cantidadInput.placeholder = "0";
        cantidadInput.id = articulo.descripcion;
        cantidadInput.value = obtenerCantidad(articulo.descripcion); // Obtener cantidad del artículo de la cookie
        cantidadInput.addEventListener("input", function () {
            actualizarCantidadCookie(articulo.descripcion, parseInt(this.value)); // Actualizar cantidad del artículo en la cookie
        });

        diletticulo.appendChild(imagen);
        diletticulo.appendChild(titulo);
        diletticulo.appendChild(precio);
        diletticulo.appendChild(cantidadInput);

        tienda.appendChild(diletticulo);
    });
}

function mostrar() {
    let total = 0;
    let cesta = document.getElementById("cesta");
    cesta.innerHTML = "";
    let productos = document.createElement("table");
    let cabecera = document.createElement("tr");
    let thnombre = document.createElement("th");
    thnombre.textContent = "Articulo";
    let thCantidad = document.createElement("th");
    thCantidad.textContent = "Cantidad";
    let thPrecio = document.createElement("th");
    thPrecio.textContent = "Precio";
    cabecera.appendChild(thnombre);
    cabecera.appendChild(thCantidad);
    cabecera.appendChild(thPrecio);
    productos.appendChild(cabecera);
    cesta.appendChild(productos);

    articulos.forEach(articulo => {
        let fila = document.createElement("tr");
        let precio = articulo.precio;
        let cantidad = obtenerCantidad(articulo.descripcion); // Obtener cantidad del artículo de la cookie
        if (cantidad > 0) {
            let producto = document.createElement("td");
            producto.textContent = articulo.descripcion;
            let cantidadProducto = document.createElement("td");
            cantidadProducto.textContent = cantidad;
            let precioProducto = document.createElement("td");
            precioProducto.textContent = precio * cantidad;
            fila.appendChild(producto);
            fila.appendChild(cantidadProducto);
            fila.appendChild(precioProducto);
            total += precio * cantidad;
            productos.appendChild(fila);
        }
    });

    let fila = document.createElement("tr");
    let precioTotal = document.createElement("td");
    precioTotal.textContent = "Total: $" + total;
    precioTotal.id = "total";
    fila.appendChild(precioTotal);
    productos.appendChild(fila);
}

window.onload = function () {
    mostrarArticulos();
};

function obtenerCantidad(descripcion) {
    // Obtener cantidad del artículo de la cookie
    let cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        let [key, value] = cookie.split('=');
        if (key.trim() === descripcion.trim()) {
            return parseInt(value);
        }
    }
    return 0; // Si no se encuentra la cookie, retornar 0
}

function actualizarCantidadCookie(descripcion, cantidad) {
    // Actualizar cantidad del artículo en la cookie
    document.cookie = `${descripcion}=${cantidad}`;
}