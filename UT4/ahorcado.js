const palabrasRAE = ["sol", "luz", "amor", "tiempo", "espacio", "vida", "color", "sueño", "alegria", "paz", "libertad", "historia", "cultura", "lengua", "sociedad", "trabajo", "familia", "arte"];

let palabra;
let caracteres;
let errores=[];
let longitud;

function darPalabra(){
    return palabrasRAE[Math.floor(Math.random() * palabrasRAE.length)];
}

function jugar(){
    palabra=darPalabra();
    let jugada=document.getElementById("jugador");
    jugada.disabled= false;
    caracteres=Array.from(palabra);
    longitud=palabra.length;
    console.log(palabra);
    pista();
}

function pista()
{
    let espacios = [];
    
    let pista = caracteres[Math.floor(Math.random() * palabra.length)];
    
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === pista) {
            espacios.push('<td id="' + i + '" bgcolor="green">' + pista + '</td>');
            longitud--;
        } else {
            espacios.push('<td id="' + i + '"></td>');
        }
    }

    document.getElementById("jugar").innerHTML = espacios.join('');
}

document.getElementById("jugador").addEventListener("keyup", function comprobar(){
    let caracter=document.getElementById("jugador").value;
    let pos=caracteres.indexOf(caracter);
    console.log(longitud);
    if(errores.length<5)
    {
        if(pos!=-1)
        {
            document.getElementById(pos).innerHTML=caracter;
            document.getElementById(pos).style.backgroundColor="green";
        }
        else
        {
            errores.unshift('<td bgcolor="red">' + caracter + '</td>');
            document.getElementById("errores").innerHTML=errores.join('');
            console.log(errores);
        }
        document.getElementById("jugador").value="";
    }
    else if(errores.length==5)
    {
        //Codigo de derrota.
    }
});