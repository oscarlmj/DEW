
/*Funcion que compara los datos introducidos y devuelve alert en caso de "error" o muestra el resultado de la operacion*/
function alerta(n,n2)
{

        n=parseInt(document.getElementById("parametro1").value);
        n2=parseInt(document.getElementById("parametro2").value);    
    

    if(n>n2)
    {
        document.getElementById("imprimirResultado").reset;
        document.getElementById("form").style.backgroundColor="";
    
        alert("El primer parametro "+n+" es mayor que el segundo "+n2);
        location.reload();
    }
    else
    {
        document.getElementById("imprimirResultado").innerHTML=n+n2;
        document.getElementById("form").style.backgroundColor="#00C896";
    }
    }

/*Funcion que resetea los datos introducidos*/
function reset()
{
    document.getElementById("parametro1").value = 'Introduce el primero parámetro';
    document.getElementById("parametro2").value = 'Introduce el segundo parámetro';
}