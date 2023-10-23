let moneda;

function lanzarMoneda() {
    console.log(moneda);
    let interval = setInterval(function(){
        cambiarMoneda();
    },150)

    setTimeout(function(){
        clearInterval(interval);
        if(ganador()==moneda)
        {
            alert("Felicidade maquina")
        }
        else
        alert("La rompefamilias");
    },6000)

}

function ganador(){
    const random = Math.random();

    if (random < 0.5) {
        console.log("Salio cara");
        return "cara";
    } else {
        console.log("Salio cruz");

        return "cruz";
    }

}

function seleccionar(value){
    moneda=value;
    console.log(value);
}

function cambiarMoneda() {
    let img = document.getElementById("moneda");

    if (img.src.includes('cara.png')) {
        img.src='../../../img/cruz.png';
    } else if (img.src.includes('cruz.png')) {
        img.src='../../../img/cara.png';
    }
}