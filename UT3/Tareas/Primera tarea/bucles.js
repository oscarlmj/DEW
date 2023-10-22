let coches=["Opel","Citroen","Renault","Seat"];
coches.nuevo="Ferrari";

function bucle1(){
    document.getElementById("imprimirResultado").innerHTML=""+"<h3>Bucle for</h3><br>";
    alert("El bucle for recorre todo o parte del array dependiendo de lo que queramos, o las condiciones que le indiquemos.")

    for(let i=0;i<coches.length;i++)
    {
        document.getElementById("imprimirResultado").innerHTML+=coches[i]+"<br>";
    }
}

function bucle2(){
    document.getElementById("imprimirResultado").innerHTML=""+"<h3>Bucle for each</h3><br>";
    alert("El for each ejecuta una funcion para cada elemento del array.")

    coches.forEach((coche) => document.getElementById("imprimirResultado").innerHTML+=coche+"<br>")


}

function bucle3(){
    document.getElementById("imprimirResultado").innerHTML=""+"<h3>Bucle for in</h3><br>";
    alert("El for in, es parecido al for each, con el contra, o pro, depende del uso que queramos darle, de que hace uso de TODOS los datos del array, es decir, si añadimos un dato nuevo al array, tambien lo muestra.")

    for(const index in coches)
    {
        document.getElementById("imprimirResultado").innerHTML+=(coches[index])+"<br>";
    }
}

function bucle4(){
    document.getElementById("imprimirResultado").innerHTML=""+"<h3>Bucle for of</h3><br>";
    alert("El for of tiene un funcionamiento parecido al del iterator de Java, guardando en una constante local el valor de la posicion en la que se encuentra en cada momento.")

    for (const coche of coches) {
        document.getElementById("imprimirResultado").innerHTML+=coche+"<br>";
    }
}

