const tarjetas = [
    VISA= /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
    MASTERCARD= /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
    AMEX= /^3[47][0-9-]{16}$/,
    CABAL= /^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/,
    NARANJA= /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]*$/
];

const objeto= {
    "visa": /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
    "mastercard": /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
    "amex": /^3[47][0-9-]{16}$/,
    "cabal": /^(6042|6043|6044|6045|6046|5896){4}[0-9]{12}$/,
    "naranja": /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]*$/
}



function validarTarjeta(){
    let usuario=document.getElementById("card").value;    
    try {
        if(usuario!== "")
        {
            for(let card in objeto)
            {   
                let tipo=objeto[card];
                if(tipo.test(usuario))
                {
                    console.log("Esta tarjeta es una "+card);
                    document.getElementById(card).checked=true;
                }
            }
        }
        else throw new Error("Por favor introduce un número de tarjeta");
    } catch (error) {
        alert(error);
    }
    


}