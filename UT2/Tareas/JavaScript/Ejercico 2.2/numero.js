let n=Math.floor(Math.random() * 100) + 1;
function numero(){
    if(parseInt(document.getElementById("fnumber").value)>n)
    {
        document.getElementById("imprimirResultado").innerHTML="Introduce un numero menor";
    }
    else if(parseInt(document.getElementById("fnumber").value)<n)
    {
        document.getElementById("imprimirResultado").innerHTML="Introduce un numero mayor";
    }
    else
    {
        document.getElementById("imprimirResultado").innerHTML="El numero es correcto "+n;
    }
}
console.log(n);



