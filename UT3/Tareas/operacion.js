let n=Math.floor(Math.random() * 49) + 1;
let n2=Math.floor(Math.random() * 49) + 1;

window.onload= function(){
    document.getElementById("imprimirResultado").innerHTML=n+" + "+n2;
}

let resultadoUsuario;

function resultado()
{
    resultadoUsuario=document.getElementById("resultadoUsuario").value;
    comprobar(resultadoUsuario);
}

function comprobar(resultadoUsuario)
{
    let operacion=n+n2;
    if(resultadoUsuario==operacion)
    document.getElementById("imprimirResultado").innerHTML="Correcto";
else
document.getElementById("imprimirResultado").innerHTML="Incorrecto";
}