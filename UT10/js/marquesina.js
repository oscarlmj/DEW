let defaultText = "Queremos que compre";
let marquesina = document.getElementById("marquesina");
let productos = document.getElementById("productos");
let timeoutId;


let botonProductoA = document.getElementById('productoA');
let botonProductoB = document.getElementById('productoB');
let botonProductoC = document.getElementById('productoC');

// Agrega event listener a cada botón
botonProductoA.addEventListener('mouseover', function () {
    marquesina.innerHTML = "Este producto es el mejor de la línea";
});

botonProductoB.addEventListener('mouseover', function () {
    marquesina.innerHTML = "Este producto es de la mejor calidad";
});

botonProductoC.addEventListener('mouseover', function () {
    marquesina.innerHTML = "Este producto es barato, barato, barato";
});

botonProductoA.addEventListener('mouseout', function () {
  marquesina.innerHTML = "Queremos que compre";
})

botonProductoB.addEventListener('mouseout', function () {
  marquesina.innerHTML = "Queremos que compre";
})
botonProductoC.addEventListener('mouseout', function () {
  marquesina.innerHTML = "Queremos que compre";
})