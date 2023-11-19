const palabrasRAE = ["sol", "luz", "amor", "tiempo", "espacio", "vida", "color", "sueño", "alegria", "paz", "libertad", "historia", "cultura", "lengua", "sociedad", "trabajo", "familia", "arte"];
let palabra;
let caracteres;
const errores=[];
let longitud;
let aciertos=0;
let acertados=[];

function darPalabra(){
    return palabrasRAE[Math.floor(Math.random() * palabrasRAE.length)];
}

function jugar(){
    palabra=darPalabra();
    let jugada=document.getElementById("jugador");
    jugada.disabled= false;
    caracteres=Array.from(palabra);
    longitud=palabra.length;
    console.log(longitud);
    
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

if(aciertos!==longitud)
{

    try {        
        let caracter=document.getElementById("jugador").value;

        if(!verificarCaracter(caracter))
        {
            throw new error ("Ya has introducido ese caracter");
        }
    } catch (error) {
        alert(error);
    }

    document.getElementById("jugador").addEventListener("keyup", function comprobar(){
        let caracter=document.getElementById("jugador").value;
        let patron=new RegExp(caracter, 'g');
        let contiene;
    
        if(caracter!=="")
        {
            console.log(errores.length)
            if(errores.length<5)
            {
                if(caracteres.indexOf(caracter)!==-1)
                {
                    try{
                        if(acertados.indexOf(caracter)==-1)
                        {
                            while((contiene = patron.exec(palabra))!== null)
                            {
                                acertados.push(caracter);
                                console.log(`Encontrado en la posición: ${contiene.index}`);
                                document.getElementById(contiene.index).innerHTML=caracter;
                                document.getElementById(contiene.index).style.backgroundColor="green";
                                aciertos++;
                            }
                            document.getElementById("jugador").value="";
                        }
                        else throw new Error("Ya has introducido ese valor")
                    }
                    catch(Error)
                    {
                        document.getElementById("jugador").value="";
                        alert(Error);
                    }
                }
                else
                {
                    console.log("No esta")
                    if(errores.indexOf('<td bgcolor="red">' + caracter + '</td>')==-1)
                    {   
                        errores.push('<td bgcolor="red">' + caracter + '</td>');
                        document.getElementById("errores").innerHTML=errores.join('');
                        document.getElementById("jugador").value="";
                        document.getElementById("ahorcado").src = "./img/" + errores.length + ".png";
                    }
                    else
                    {
                        alert("Ya has introducido ese valor")
                        document.getElementById("jugador").value="";
                    }
                }
            }
            else
            {
                alert("Has perdido");
                location.reload();
            }
        }
    })
}


function verificarCaracter(caracter)
{        
    let patron=new RegExp(caracter, 'g');
    let contiene;

    try{
        if(acertados.indexOf(caracter)==-1)
        {
            while((contiene = patron.exec(palabra))!== null)
            {
                acertados.push(caracter);
                console.log(`Encontrado en la posición: ${contiene.index}`);
                document.getElementById(contiene.index).innerHTML=caracter;
                document.getElementById(contiene.index).style.backgroundColor="green";
                aciertos++;
            }
            document.getElementById("jugador").value="";
        }
        else if(errores.indexOf('<td bgcolor="red">' + caracter + '</td>')==-1)
        {   
            errores.push('<td bgcolor="red">' + caracter + '</td>');
            document.getElementById("errores").innerHTML=errores.join('');
            document.getElementById("jugador").value="";
            document.getElementById("ahorcado").src = "./img/" + errores.length + ".png";
        }
        else throw new error("Ya has introducido ese caracter");
    }
    catch(error){
        alert(error);
    }
}