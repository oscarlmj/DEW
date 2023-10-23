function factorial(){
    let n=document.getElementById("numero").value;
    let resultado=n;

    try{
        if(n==null) throw new Error ("Introduce un valor")
        
        for(let i=n-1;i>0;i--)
        {
            resultado*=i;
        }
    document.getElementById("final").innerText=resultado;
    }
    catch(Error)
    {
        alert(Error);
    }
}