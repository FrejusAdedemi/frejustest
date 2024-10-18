let choix , result;
do {
    choix=prompt("Que souhaitez vous faire?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - division\n");  
} while (choix !='1' && choix !='2' && choix !='3' && choix !='4');
do {
    var nombreA  = parseFloat(prompt("premier nombre")); 
    var nombreB  = parseFloat(prompt("deuxieme nombre"));
} while (isNaN(nombreA) || isNaN(nombreB));

function addition(a,b) {
    result=a+b;
    return result;
}

function multiplication(a,b) {
    result=a*b;
    return result;
}

function soustraction(a,b) {
    result=a-b;
    return result;    
}
    
function division(a,b) {
    while (b==0) {
        b=prompt( "Erreur: division impossible par zéro\n"+" Donnez un second nombre different de zero");
    }
    result=a/b;   
    return result;
}

switch (choix) {
    case "1":
        result = addition(nombreA,nombreB);
        break;
    case "2":
        result = multiplication(nombreA,nombreB);
        break;
    case "3":
        result = soustraction(nombreA,nombreB);
        break;
    case "4":
        result = division(nombreA,nombreB)
        break;
    default:
        result = "choix invalide";      
}
alert("Le résultat est : " + result);
alert("Fin du programme")

let element = document.getElementById("monElement");
console.log(element); // Affiche l'élément HTML avec l'ID 'monElement'
document.getElementById("monElement").textContent = "Nouveau contenu";
document.getElementById("monBouton").addEventListener("click", function() {
    alert("Bouton cliqué !");
  });