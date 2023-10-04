

function loteria(){
    let nums=[];
    let r="";
    while(nums.length<6)
    {
        let n=Math.floor(Math.random() * 49) + 1;
        if(!nums.includes(n))
        {
            nums[nums.length]=n;
        }
    }

    for(let i=0;i<6;i++)
    {
        r+=" "+nums[i];
    }

    document.getElementById("imprimirResultado").innerHTML=r;
    
}