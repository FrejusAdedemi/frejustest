// Etape 1 - Sélectionner nos éléments
const errorElement=document.getElementById("error");
const inputElement=document.getElementById("userInput");
const submitButton=document.getElementById("submitBtn");
const attemptsElement=document.getElementById("attempts");
const historyElement=document.getElementById("history");

// Etape 2 - Cacher l'erreur
function cacherErreur()
{
   errorElement.style.display="none";
}
cacherErreur();

// Etape 3 - Générer un nombre aléatoire
const nombreAleatoire = Math.floor(Math.random()*1001);
console.log("Le juste prix est :",nombreAleatoire);
let nombreTentative=0;
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
function estNombre(valeur)
{
    return !isNaN(valeur) && valeur !== "" && valeur >= 0 && valeur <= 1000;
}

// Etape 5 - Agir à l'envoi du formulaire
submitButton.addEventListener("click", function(event)
{
    event.preventDefault();
    cacherErreur();

    const valeur = parseInt(inputElement.value);
    if(!estNombre(valeur))
    {
        errorElement.style.display="block";
        errorElement.textContent="Veuillez entrer un nombre";
        return;
    }
    nombreTentative++;
    attemptsElement.textContent = `Tentative(s): ${nombreTentative}`;
    verifierNombre(valeur);
    
    inputElement.value = "";
});

// Etape 6 - Créer la fonction vérifier
function verifierNombre(valeur)
{
    const tentative = document.createElement("div");
    tentative.classList.add("attempt");
    if(valeur > nombreAleatoire)
    {
        tentative.textContent = `#${nombreTentative} ( ${valeur} ) Trop grand !`;
    }
    else if(valeur <nombreAleatoire)
    {
        tentative.textContent = `#${nombreTentative} ( ${valeur} ) Trop petit !`;
    }
    else
    {
        tentative.textContent = `#${nombreTentative} ( ${valeur} ) Félicitations ! Vous avez deviné le juste prix`;
    }

    historyElement.append(tentative);
}
console.log("Le juste prix est :",nombreAleatoire);