function validarNombre(){
    let nombre = document.getElementById("nombre").value;
    let patron = nombreApellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([-'\s][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;

    if(nombre!=="")
    {
        if(patron.exec(nombre))
            return true;
        else
            return false;
    }
    else
        return false;
}

function validarApellido(){
    let apellido1 = document.getElementById("apellido1").value;
    let apellido2 = document.getElementById("apellido2").value;

    let patron=/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+([-'\s][a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)*$/;

    if(apellido1!=="")
    {
        if(patron.exec(apellido1))
        {
            if(patron.exec(apellido2))
                return true;
            else 
                return false;
        }
        else
            return false;
    }
    else
        return false;
}

function validarMatricula(){
    let patron = /^[0-9]{4}[BCDFGHJKLMNPQRSTVWXYZ][BCDFGHJKLMNPQRSTVWXYZ]\s[BCDFGHJKLMNPQRSTVWXYZ]$/;
    let matricula=document.getElementById("matricula");

    if(matricula!=="")
    {
        if(patron.test(matricula))
        {
            return true;
        }
        else
            return false;
    }
    else
    {
        return false;
    }
}



function validarForm(){
    if(validarMatricula())
        alert("Aloooo");
    else
        alert("Holaaa");
}