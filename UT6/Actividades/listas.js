let seleccionada = document.getElementById("seleccionada");
let opciones = document.getElementById("opciones");
let texto = document.getElementById("texto");

let videos = ["Humor","Drama","Ficcion","Otros"];
let discos = ["Pop","Rock","Latino","Otros"];
let juegos = ["Simulador","Rol","Medieval","Otros"];

function cambiarOpciones(){
    switch(seleccionada.value)
    {
        case "videos":
            break;
        case "juegos":
            texto.style.backgroundColor='red';
            break;
    }
}