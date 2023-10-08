function numero()
{
    let n=(document.getElementById("num").value);
    try
    {
        if(n<5) throw ("El numero debe ser mayor que 5 y menor que 10")
        else if(n>10) throw ("El numero debe ser menor que 10 y mayor que 5")
        else if(isNaN(n)) throw ("Debe introducir un numero");
        else document.getElementById("imprimirResultado").innerHTML="Bien hecho";
    }
    catch(error)
    {
        document.getElementById("imprimirResultado").innerHTML=error;
    }
}