/*Se crean las dos varibales que contienen los valores de la operacion, entre 1 y 50 */

let n=Math.floor(Math.random() * 49) + 1;
let n2=Math.floor(Math.random() * 49) + 1;

/*Se genera un número aleatorio entre 0 y 1, 0 es Suma, 1 es Resta*/
let op=Math.round(Math.random());

/*Se crea la variable que contiene el resultado de la operacion*/
let operacion;

/*Al cargar la página, comprueba si es Suma o Resta, muestra la operacion por pantalla y almacena el resultado en la variable operacion*/
window.onload= function(){

    if(op==0)
    {
        document.getElementById("imprimirResultado").innerHTML=n+" + "+n2;
        operacion=n+n2;
    }
    else
    {
        document.getElementById("imprimirResultado").innerHTML=n+" - "+n2;
        operacion=n-n2;
    }
}

/*Se crea la variable que contiene el resultado indicado por el usuario*/
let resultadoUsuario;

/*Funcion que recoge el resultado introducido por el usuario y llama a la funcion comprobar() dandole como parametro dicho resultado*/
function resultado()
{
    resultadoUsuario=document.getElementById("resultadoUsuario").value;
    comprobar(resultadoUsuario);

    if(comprobar(resultadoUsuario))
        document.getElementById("imprimirResultado").innerHTML="Correcto";
    else
        document.getElementById("imprimirResultado").innerHTML="Incorrecto";
}

/*Funcion que compara el dato introducido por el usuario y el resultado de la operación, devolviendo*/
function comprobar(resultadoUsuario)
{
    if(resultadoUsuario==operacion)
    return true;
    else
    return false;
}