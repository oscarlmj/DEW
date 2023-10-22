function lanzarMoneda() {
    setInterval(cambiarMoneda(),500);

    const random = Math.random();
    if (random < 0.5) {
        return "Cara";
    } else {
        return "Cruz";
    }
}

function cambiarMoneda()
{
    if(document.getElementById("moneda").src=="../../../img/cara.png")
    {
        document.getElementById("moneda").src="../../../img/cruz.png";
    }
    else
        document.getElementById("moneda").src="../../../img/cara.png";
}

let moneda;
if(document.getElementById("cara").addEventListener("click"))
{
    moneda="cara";
}
else if(document.getElementById("cruz").addEventListener("click"))
{
    moneda="cruz";
}


