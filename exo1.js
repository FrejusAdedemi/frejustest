// // exo sur if
// let age = 18, statut = "étudiant";
// if(age < 18 || statut == "étudiant") {
//     console.log('Partie 1');
// }
// else if(age == 18 && statut != "étudiant") {
//     console.log('Partie 2');
// }
// else {
//     console.log('Partie 3');
// }

function abracadabra() {
    let prenom= prompt('quel est votre prénom');
    let nom= prompt('quel est votre nom');
    let age= prompt('quel est votre age');
    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, "
        + prenom
        +"! Euh... Je veux dire... Monsieur le grand magicien " 
        + nom
        + " ! Cela fait déjà "
        + age
        + " ans que vous faites rayonner notre contrée ! ");
}
abracadabra();