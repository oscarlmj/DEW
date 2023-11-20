const palabrasRAE = ["sol", "luz", "amor", "tiempo", "espacio", "vida", "color", "sueño", "alegria", "paz", "libertad", "historia", "cultura", "lengua", "sociedad", "trabajo", "familia", "arte"];
let palabra;
let caracteres;
const errores=[];
let longitud;
let acertados=[];
let fallos=[];

function darPalabra(){
    return palabrasRAE[Math.floor(Math.random() * palabrasRAE.length)];
}

function jugar(){
    if(palabra==null){
        palabra=darPalabra();
        let jugada=document.getElementById("jugador");
        jugada.disabled= false;
        caracteres=Array.from(palabra);
        longitud=palabra.length;
        console.log(longitud);
        
        console.log(palabra);
        pista();
    }
    else
    location.reload();
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


document.getElementById("jugador").addEventListener("keyup", function comprobar() {
    let caracter = document.getElementById("jugador").value;
    verificarCaracter(caracter);

    if (acertados.length == longitud) {
        setTimeout(function () {
            alert("HAS GANADO MAQUINA");
        }, 250); // Retraso de 1 segundo
    } else if (errores.length == 6) {
        setTimeout(function () {
            alert("HAS PERDIDO");
        }, 250); // Retraso de 1 segundo
    }
});




function verificarCaracter(caracter)
{        
    let patron=new RegExp(caracter, 'g');
    let contiene;

    if(caracter!=="")
    {
        try{
            if(caracteres.indexOf(caracter)!==-1 && acertados.indexOf(caracter)==-1)
            {
                while((contiene = patron.exec(palabra))!== null)
                {
                    acertados.push(caracter);
                    console.log(`Encontrado en la posición: ${contiene.index}`);
                    document.getElementById(contiene.index).innerHTML=caracter;
                    document.getElementById(contiene.index).style.backgroundColor="green";
                }
                document.getElementById("jugador").value="";
            }
            else if(fallos.indexOf(caracter)==-1 && acertados.indexOf(caracter)==-1)
            {   fallos.push(caracter);
                errores.push('<td bgcolor="red">' + caracter + '</td>');
                document.getElementById("errores").innerHTML=errores.join('');
                document.getElementById("jugador").value="";
                document.getElementById("ahorcado").src = "./img/" + errores.length + ".png";
            }
            else throw new Error("Ya has introducido ese caracter");
        }
        catch(Error){
            alert(Error);
            document.getElementById("jugador").value="";
        }
    }
}