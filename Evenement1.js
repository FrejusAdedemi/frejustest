let btn=document.querySelector('button');
btn.addEventListener('click',start);
let interval;
let secondes=10;
function start()
{
    interval=setInterval(decompte,1000);
}
function decompte()
{
    secondes--;
    let h1=document.querySelector('h1');
    if(secondes==0)
        {
            clearInterval(interval);
            h1.innerHTML+='Stop !!!';
        }
    else
    { 
        h1.innerHTML+=secondes + "<br>";
    }
}