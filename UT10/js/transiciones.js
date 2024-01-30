let imagen = document.getElementById('imagen');

function moverImagen() {
  // Mover la imagen hasta el extremo
  imagen.style.transform = 'translateX(200px) scaleX(-1)';

  // Volver la imagen a la posición inicial sin invertir horizontalmente
  setTimeout(() => {
    imagen.style.transform = 'translateX(0) scaleX(-1)';
  }, 1000); // Ejemplo de tiempo total de 1 segundo (500ms para el giro y 500ms adicionales)
}

function situarImagen() {
  // Volver la imagen a la posición inicial sin invertir horizontalmente
  imagen.style.transform = 'translateX(0) scaleX(1)';
}
