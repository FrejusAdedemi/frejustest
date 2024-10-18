let Spoiler=document.querySelector('button');
let hidden=true;
Spoiler.addEventListener('click',function()
{
    if(hidden==true)
    {
        Spoiler.textContent='Cacher le message';
        document.querySelector('h1').style.display='block';
        hidden=false;
    }
    else
    {
        Spoiler.textContent='Aficher le message';
        document.querySelector('h1').style.display='none';
        hidden=true;
    }

})