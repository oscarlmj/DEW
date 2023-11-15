const palabrasRAE = ["sol", "luz", "amor", "tiempo", "espacio", "vida", "color", "sueño", "alegría", "paz", "libertad", "historia", "cultura", "lengua", "sociedad", "trabajo", "familia", "arte"];

let palabra;

function darPalabra(){
    palabra= palabrasRAE[Math.floor(Math.random() * palabrasRAE.length)];
    return palabra;
}

function jugar()
{
    darPalabra();
    let espacios="";
    console.log(palabra);

    for(let x=0;x<6;x++)
    {
        for (let i = 0; i < palabra.length; i++)    {
            espacios+='<input type="text" class="letra" minlength="0" maxlength="1">';   
        }
        espacios+='<br>';
    }
    
    document.getElementById("jugar").innerHTML = espacios;
}

function deshabilitar(){
    let elementos=document.getElementsByClassName(".letra");
    for(let i=0;i<elementos.length;i++)
    {
        elementos[i].disabled=true;
    }
}

function comprobar()
{
    document.getElementsByName("letra").addEventListener('change', deshabilitar());
}