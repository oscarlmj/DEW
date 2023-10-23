let moneda;

/*
Funcion principal, que llama a la funcion cambiarMoneda() en un interval para simular el lanzamiento de la moneda,
y un timeout en el que se genera la cara la ganadora y se compara con la seleccionada mostrando el mensaje correspondiente.
Se controla que el usuario haya seleccionado una cara, monstrando un mensaje de error en caso contrario.
*/
function lanzarMoneda() {
    try{
        if(moneda == null) throw new Error("Selecciona una moneda para poder jugar");
        let interval = setInterval(function(){
            cambiarMoneda();
        },150)
    
        setTimeout(function(){
            clearInterval(interval);
            if(ganador()==moneda)
            {
                alert("Felicidades, has ganado")
            }
            else
            {
                if(moneda=="cara")
                {
                    alert("Que mala suerte, ha salido cruz");
                }
                else
                {
                    alert("Que mala suerte ha salido cara");
                }
            }
        },6000)
    }
    catch(Error)
    {
        alert(Error);
    }
}

//Funcion que aleatoriamente elige la cara ganadora.
function ganador(){
    const random = Math.random();

    if (random < 0.5) {
        //console.log("Salio cara");

        return "cara";
    } else {
        //console.log("Salio cruz");
        return "cruz";
    }

}

//Funcion que recoge el valor de la cara seleccinada.
function seleccionar(value){
    moneda=value;
}


//Funcion que hace el cambio de la imagen de la moneda.
function cambiarMoneda() {
    let img = document.getElementById("moneda");

    if (img.src.includes('cara.png')) {
        img.src='../../../img/cruz.png';
    } else if (img.src.includes('cruz.png')) {
        img.src='../../../img/cara.png';
    }
}