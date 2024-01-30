
let ventanas=[];
function abrir_ventana(){
    window.open("./ventana.html", "Nueva ventana");
}

function abrir_caracteristicas() {
    let opcionesVentana = 'width=420,height=430,menubar=no,status=yes,resizable=yes';
    window.open("./ventana.html", '_blank', opcionesVentana);

  }
  
function abrir_caracteristicas2(){
    let posY = Math.floor(Math.random() * 501);
  
    let opcionesVentana = 'width=600,height=300,top=' + posY + ',left=150,menubar=no,status=no,scrollbars=no,directories=no,location=no,titlebar=no,toolbar=no';
    window.open("./ventana.html", '_blank', opcionesVentana);

}

function completa(){
    let screenWidth = window.screen.width;
  let screenHeight = window.screen.height;

  // Configurar opciones para la ventana a pantalla completa
  let opcionesVentana = 'width=' + screenWidth + ',height=' + screenHeight + ',menubar=no,status=no,scrollbars=no,directories=no,location=no,titlebar=no,toolbar=no';

  // Abrir la ventana con las opciones
  window.open("./ventana.html", '_blank', opcionesVentana);
}
