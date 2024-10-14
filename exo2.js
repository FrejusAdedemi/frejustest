const poidsEnKg     = prompt('quel est votre poids en Kg');
const tailleEnMetre = prompt('quel est votre taille en metre');

function calculerIMC(poidsEnKg,tailleEnMetre,result) {
   result= (poidsEnKg)/((tailleEnMetre)**2);
   if (result<18.5) {
    alert('Insuffisance pondérale');
   }
   if(result>=18.5 && result <=24.9){
    alert('Avec un IMC de ' + result+ ', vous avez un poids normal');
   }
   else if(result>=25 && result <=29.9){
    alert('Avec un IMC de ' + result + ', vous etes en surpoids');
   }
   else if(result>=30){
    alert('Avec un IMC de ' + result + ', vous etes obèse')
   }
}
calculerIMC(poidsEnKg,tailleEnMetre);