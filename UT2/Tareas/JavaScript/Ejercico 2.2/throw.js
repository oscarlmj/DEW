

function error()
{
    
    let n=parseInt(document.getElementById("num").value);
    try
    {
        if(n<5) throw "menor";
        if(n>10) throw "mayor";
        if(n=NaN) throw "NaN";
    }
    catch(err)
    {
        if(err="menor")
        {
            document.getElementById("imprimirResultado").innerHTML="El numero es menor que 5";
        }
        if(err="mayor")
        {
            document.getElementById("imprimirResultado").innerHTML="El numero es mayor que 10";

        }
        if(err="NaN")
        {
            document.getElementById("imprimirResultado").innerHTML="No es un numero";
        }
    }
}