let jugada;
let resultado;

//Funcion que selecciona el valor de la jugada
function seleccionar(value){
    jugada=value;
}

/*Funcion que controla al usuario mostrando un error si no selecciona ninguna jugada, 
hace la animacion de las jugadas, y muestra el resultado*/
function jugar()
{
    try{
        if(jugada == null) throw new Error("Selecciona una jugada para poder jugar");
        console.log("Has elegido "+jugada);

        let interval = setInterval(function(){
            cambiarJugada();
        },150)
    
        setTimeout(function(){
            clearInterval(interval);
            resultado=ganador();
            console.log("Ha salio "+resultado);

            switch(jugada)
            {
                case "papel":
                    if(resultado=="piedra")
                    resultado="Enhorabuena";
                    else if(resultado=="tijera")
                    resultado="Pierdes contra tijera";
                    else
                    resultado="Papel no mata papel";
                    break;
                case "piedra":
                    if(resultado=="papel")
                    resultado="Pìerdes contra papel";
                    else if(resultado=="tijera")
                    resultado="Enhorabuena";
                    else
                    resultado="Piedra no mata piedra";
                    break;
                case "tijera":
                    if(resultado=="piedra")
                    resultado="Pierdes contra piedra";
                    else if(resultado=="papel")
                    resultado="Enhorabuena";
                    else
                    resultado="Tijera no mata tijera";
                    break;
            }   
                    alert(resultado);
        },6000)
    }
    catch(Error)
    {
        alert(Error);
    }
}

//Genera un numero aleatorio entre 1 y 3, asignandole a cada uno el valor de una de las jugadas, siendo este el resultado
function ganador()
{
    let random = Math.floor(Math.random() * 3) + 1;
    let img = document.getElementById("jugada");


    if(random==1)
    {
        resultado="papel";
        return "papel";
    }  
    else if(random==2)
    {
        resultado="piedra";
        return "piedra";
    }
    else
    {
        resultado="tijera";
        return "tijera";
    }
}

function cambiarJugada(){
    let img = document.getElementById("jugada");

    if(img.src.includes('papel.png'))
        img.src='../../../img/tijera.png'
    else if(img.src.includes('tijera.png'))
        img.src='../../../img/piedra.png'
    else if(img.src.includes('piedra.png'))
        img.src='../../../img/papel.png'
}