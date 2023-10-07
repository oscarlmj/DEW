function iniciar(){
    window.close();
    window.open('./try_catch2.html','_blank');
    
    alert("Hola");
}

try{
    const confirm=confirm("Haga click en aceptar para seguir viendo la pagina");

    if(confirm===false){
        throw new Error("El usuario hizo click en cancelar");
    }
}
catch(error)
{
    console.error(error.message);
}
