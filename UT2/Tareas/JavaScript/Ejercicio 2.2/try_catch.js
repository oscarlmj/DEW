function iniciar(){
    const resultado=confirm("Si desea seguir viendo la pagina haga click en Aceptar, si quiere volver a la principal haga click en Cancelar");

    try{
        if(resultado)
        {
            alert("El usuario ha decidido seguir viendo la pagina");
        }
        else
            throw ("El usuario ha decidido volver a la pagina anterior");
    }
    catch(error)
    {
        alert(error);
        volver();
    }
}

function volver()
{
    window.close();
    window.open('./try_catch.html','_blank');
}

function cerrar()
{
    window.close();
    window.open('./try_catch2.html','_blank');
}