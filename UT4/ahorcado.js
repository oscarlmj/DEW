const palabrasRAE = ["sol", "luz", "amor", "tiempo", "espacio", "vida", "color", "sueño", "alegría", "paz", "libertad", "historia", "cultura", "lengua", "sociedad", "trabajo", "familia", "arte"];

let palabra;
let caracteres

function darPalabra(){
    return palabrasRAE[Math.floor(Math.random() * palabrasRAE.length)];
}

function jugar(){
    palabra=darPalabra();
    document.getElementById("jugador").disabled= false;
    caracteres=Array.from(palabra);

    console.log(palabra);
    pista();
}

function pista()
{
    let espacios = [];  // Inicializa como un array vacío

    let pista = caracteres[Math.floor(Math.random() * palabra.length)];
    
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === pista) {
            espacios.push('<td id="' + i + '" bgcolor="green">' + pista + '</td>');
        } else {
            espacios.push('<td id="' + i + '"></td>');
        }
    }

    // Convierte el array en una cadena antes de asignarlo a innerHTML
    document.getElementById("jugar").innerHTML = espacios.join('');
}

function comprobar(){
    let caracter=document.getElementById("jugador").value;

    let pos=caracteres.indexOf(caracter);
    if(pos!=-1)
    {
        document.getElementById(pos).innerHTML=caracter;
        document.getElementById(pos).style.backgroundColor="green";
    }
    else
    {
        document.getElementById("errores").innerHTML+='<td bgcolor="red">' + caracter + '</td>';
    }
}