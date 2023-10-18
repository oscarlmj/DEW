
function incrementar(){
    let n=Math.floor(Math.random() * 10) + 1;
    console.log(n);
    let mod= Math.floor(Math.random() * 10) + 1;
    console.log(mod);

    document.getElementById("imprimirResultado").innerHTML="El numero "+n+" se ha multiplicado por "+mod+" dando como resultado :<br>"+n*mod;
}
