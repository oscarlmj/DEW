class Articulo {
    constructor(codigo, descripcion, precio,imagen) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// Crear un array de objetos Articulo
let articulos = [
    new Articulo("001", "Altavoces", 25,"../img/ALTAVOCES.GIF"),
    new Articulo("002", "DVD", 50,"../img/DVD.GIF"),
    new Articulo("002", "Impresora", 80,"../img/IMPRESORA.GIF"),
    new Articulo("002", "Tarjeta de red", 20,"../img/MODEMINTERNO.GIF"),
    // Agregar más artículos según sea necesario
];

// Función para crear los elementos HTML de los artículos
function mostrarArticulos() {
    let tienda = document.getElementById("articulos");
    articulos.forEach(articulo => {
        let divArticulo = document.createElement("div");
        divArticulo.classList.add("articulo");

        let imagen = document.createElement("img");
        imagen.src = articulo.imagen;
        imagen.alt = articulo.descripcion;

        let titulo = document.createElement("h2");
        titulo.textContent = articulo.descripcion;

        let precio = document.createElement("p");
        precio.textContent = "Precio: $" + articulo.precio;

        let cantidadInput = document.createElement("input");
        cantidadInput.type = "number";
        cantidadInput.placeholder="0";
        cantidadInput.id = articulo.descripcion;
        cantidadInput.value = articulo.cantidad;
        cantidadInput.addEventListener("input", function() {
            // Actualizar la cantidad del artículo en el objeto Articulo cuando el usuario cambie el valor
            articulo.cantidad = parseInt(this.value);
        });

        divArticulo.appendChild(imagen);
        divArticulo.appendChild(titulo);
        divArticulo.appendChild(precio);
        divArticulo.appendChild(cantidadInput);

        tienda.appendChild(divArticulo);
    });
}

function mostrar() {
    //Iniciamos el valor total de la cesta a 0.
    let total=0;

    //Recogemos en una variable el div con id Cesta del html, y lo vaciamos para cada vez que le demos al boton que se "actualice".
    let cesta = document.getElementById("cesta");
    cesta.innerHTML="";

    //Creamos la tabla.
    let productos = document.createElement("table");

    //Creamos la fila para la cabecera.
    let cabecera = document.createElement("tr");

    //Creamos los titulos de la tabla.
    let thnombre = document.createElement("th");
    thnombre.textContent = "Articulo";
    let thCantidad = document.createElement("th");
    thCantidad.textContent = "Cantidad";
    let thPrecio = document.createElement("th");
    thPrecio.textContent = "Precio";

    //Añadimos a la cabecera los titulos.
    cabecera.appendChild(thnombre);
    cabecera.appendChild(thCantidad);
    cabecera.appendChild(thPrecio);

    //Y añadimos a la cabecera los th.
    productos.appendChild(cabecera);

    //Añadimos a la tabla el conjunto creado anteriormente.
    cesta.appendChild(productos);

    //Recorremos todos los productos de la tienda.
    articulos.forEach(articulo => {
        //Por cada uno de ellos se crea una fila, almacenamos su precio y la cantidad.
        let fila =document.createElement("tr");
        let precio = articulo.precio;
        let cantidad = document.getElementById(articulo.descripcion).value;

        if(cantidad>0)
        {
            //Si la cantidad es >0, creamos un td para ir almacenando los valores.

            //td para el nombre del producto.
            let producto = document.createElement("td");
            producto.textContent = articulo.descripcion;

            //td para la cantidad que queramos del producto.
            let cantidadProducto = document.createElement("td");
            cantidadProducto.textContent = cantidad;

            //td para el coste total de la cantidad de dicho producto.
            let precioProducto = document.createElement("td");
            precioProducto.textContent = precio*cantidad;
            
            //Añadimos todo esto al tr.
            fila.appendChild(producto);
            fila.appendChild(cantidadProducto);
            fila.appendChild(precioProducto);

            //Sumamos al total de la compra.
            total+=precio*cantidad;

            //Añadimos a la tabla.
            productos.appendChild(fila);
        }
    });

    //Y por ultimo se crea un tr para mostrar el precio total.
    let fila = document.createElement("tr");
    let precioTotal = document.createElement("td");
    precioTotal.textContent = "Total: $"+total;
    precioTotal.id="total";
    fila.appendChild(precioTotal);
    productos.appendChild(fila);
}

// Ejecutar la función mostrarArticulos cuando la página se haya cargado completamente
window.onload = function() {
    mostrarArticulos();
};
