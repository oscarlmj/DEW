function iniciar(){
    const resultado=confirm("Si desea ver la siguiente pagina haga click en Aceptar, si quiere seguir en esta haga click en Cancelar");

    try{
        if(resultado)
        {
            alert("El usuario ha decidido ver la siguiente pagina");
            window.close();
            window.open('./try_catch2.html','_blank');
        }
        else
            throw ("El usuario ha decidido quedarse en esta pagina");
    }
    catch(error)
    {
        alert(error);
    }
}

function volver()
{
    window.close();
    window.open('./try_catch.html','_blank');
}