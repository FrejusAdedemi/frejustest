const url='https://blockchain.info/ticker';
function getBitcoinPrice() 
{
//  creer une requete
let requete = new XMLHttpRequest();

//  ouvrir la requete
requete.open('GET', url);// on peut utiliser POST pour autre chose
requete.responseType = 'json';
//  envoyer la requete
requete.send();

//  traiter la reponse
requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) 
        {
            if (requete.status === 200) 
                {
                    let response = requete.response;
                    // console.log(response);
                    let prixEnEuros= reponse.EUR.last;
                    document.querySelector('#price_label').textContent = prixEnEuros;
                }
                else
                {
                    alert('Un probleme est intervenu. Veuillez reessayer plus tard.');
                }
        }
}
console.log('prix actualiser');
}
setInterval(getBitcoinPrice, 1000);
