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
    let patron=new RegExp(caracter, 'g');
    let contiene;

    if(errores.length<5)
    {
        if(caracteres.indexOf(caracter)!==-1)
        {
            while((contiene = patron.exec(palabra))!== null)
            {
                console.log(`Encontrado "i" en la posición: ${contiene.index}`);
                document.getElementById(contiene.index).innerHTML=caracter;
                document.getElementById(contiene.index).style.backgroundColor="green";
            }
            document.getElementById("jugador").value="";
        }
        else
        {
            console.log("Nosta");
            errores.unshift('<td bgcolor="red">' + caracter + '</td>');
            document.getElementById("errores").innerHTML=errores.join('');
            document.getElementById("jugador").value="";
        }
    }
    else
    {
        alert("Has perdio");
        location.reload();
    }
});