let coches=["Opel","Citroen","Renault","Seat"];
coches.nuevo="Ferrari";

function bucle1(){
    for(let i=0;i<coches.length;i++)
    {
        document.getElementById("imprimirResultado").innerHTML="";
        document.getElementById("imprimirResultado").innerHTML+=coches[i]+", ";
    }
    let explicacion="EL bucle for simple realiza las acciones indicadas la cantidad de veces determinadas segun la sintaxis dada, o hasta que se cumpla alguna condicion interna y haga un break"
    document.getElementById("imprimirResultado").innerHTML+=explicacion;
}

function bucle2(){
    coches.forEach((coche) => document.getElementById("imprimirResultado").innerHTML+=coche+", ")

    let explicacion="El bucle for each realiza las acciones que indiquemos para cada uno de los elementos del array, sin necesidar de declarar un contador para las posiciones"
    document.getElementById("imprimirResultado").innerHTML+=explicacion;

}

function bucle3(){
    
    for(const index in coches)
    {
        document.getElementById("imprimirResultado").innerHTML+=(coches[index])+", ";
    }

    let explicacion="El bucle for in, es muy parecido al for each, con el contra de que busca TODOS los elementos del array, incluidos los que hayan sido añadidos posteriormente a la creación, como puede ser Ferrari en este caso"
    document.getElementById("imprimirResultado").innerHTML+=explicacion;

}

function bucle4(){
    for(const coche of coches)
    {
        document.getElementById("imprimirResutlado").innerHTML=coche;
    }
}

