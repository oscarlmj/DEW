const tarjetas= {
    "visa": /^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
    "mastercard": /^5[1-5][0-9]{2}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$/,
    "amex": /^3[47][0-9-]{16}$/,
    "cabal": /^604[23][0-9]{2}$/,
    "naranja": /^(589562|402917|402918|527571|527572|0377798|0377799)[0-9]*$/
}

//Numeros
//Visa 4000-0000-0000-0000
//Mastercard 5000-0000-0000-0000
//Amex 341111212121212121
//Cabal 604200
//Naranja 5275721

let cvv=document.getElementById("cvv");

function validarNumero(){
    document.getElementById("carderror").innerHTML="";
    let tarjeta=document.getElementById("card").value;    
    let tarjetaUsuario = document.getElementById("tipo").value;
    let valida=true;

    try {
        if(tarjeta!== "")
        {
            for(let card in tarjetas)
            {
                let tipo=tarjetas[card];

                if(tipo.test(tarjeta))
                {
                    if(card !== tarjetaUsuario)
                    {
                        valida = false;
                    }
                    console.log("Esta tarjeta es una "+card);
                    document.getElementById(card).checked=true;
                }
            }

            if(valida==false)
            throw new Error("Ese número de tarjeta no es valido");

        }
        else throw new Error("Por favor introduce un número de tarjeta");
    } catch (error) {
        document.getElementById("carderror").innerHTML+=error.message;
    }
}

function validarCVV() {
    let cvvInput = document.getElementById("cvv");
    let cvvLength = cvvInput.value.length;
    let cvvPlaceholderLength = cvvInput.placeholder.length;
    document.getElementById("cvverror").innerHTML="";

    try {
        if(cvvInput.value!="")
        {
            if (cvvLength !== cvvPlaceholderLength) {
                throw new Error("Introduce un CVV correcto");
            }
            else
            return true;
        }
        else
        throw new Error("Este campo es obligatorio");
    } catch (error) {
        document.getElementById("cvverror").innerHTML+=error.message;
    }
}

function validarFecha() {
    let mesInput = document.getElementById("mes");
    let anoInput = document.getElementById("ano");
    document.getElementById("fechaerror").innerHTML = "";

    try {
        if (mesInput.value !== "" && anoInput.value !== "") {
            let mesActual = new Date().getMonth() + 1; // Se suma 1 ya que los meses van de 0 a 11
            let anoActual = new Date().getFullYear();
            
            if (parseInt(anoInput.value) < anoActual ||
                (parseInt(anoInput.value) === anoActual && parseInt(mesInput.value) < mesActual)) {
                throw new Error("La tarjeta ha vencido. Por favor, utiliza una tarjeta válida.");
            } else {
                return true;
            }
        } else {
            throw new Error("Por favor, completa tanto el mes como el año de vencimiento.");
        }
    } catch (error) {
        document.getElementById("fechaerror").innerHTML += error.message;
    }
}