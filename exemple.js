// // affichage d informations dans la boite de dialogue
// alert("Hello world!");
// // demande de confirmation
// confirm('changez')
// if(confirm('changez')){
//     // si on confirme alors on affiche
//     alert("ok");
// }
// else{
//     //si on ne confirme pas
//     alert("annulation");
// }
// // demande de renseignements
// let age=prompt("entrez votre age :");
// alert('Bonjour vous avez ' + age + ' ans');


// // fonction sans parametre
// function direBonjou() {
//     alert(' Bonjour Utilisateur');
//  }
// direBonjou();


// // fonction a parametre
// function addition(nombreUn,nombreDeux) {
//    console.log(nombreUn+nombreDeux);
// }
// addition(2,3.1);

// // challenge
//  function direBonjour(prenom) {
//     alert(' Bonjour ' + prenom);
//  }
// direBonjour('Frejus');

// // Variable globale est valable pr tt le fichier
// //Variable locale est valable que pr la fonction ou elle est definie
// let crie="Toujours plus bas"; // globale

// function crieDeGuerre(params) {
//     let crie="Toujours plus fort !" // locale;
//     console.log(crie);
// }
// crieDeGuerre();
// console.log(crie);

// // fonction qui retourne quelque chose et non affiche
// let nombreUn=4, nombreDeux=7;

// function addition(nombreA,nombreB) {
//     result=nombreA+nombreB;
//     // console.log(result); cela affiche , ne returne pas
//     //pour retourner il faut
//     return result;
// }
// console.log(addition(nombreUn,nombreDeux));

// // Pour afficher le result retourner de la fonction precedente
// add=addition(nombreUn,nombreDeux);
// console.log(add);

// function division(nombreA,nombreB) {
//     result=nombreA/nombreB;
//     // console.log(result); cela affiche , ne returne pas
//     //pour retourner il faut
//     return result;
// }

// // affiche resultat de la division
// div=division(nombreUn,nombreDeux);
// console.log(div)

// // operation complexe avec les resultats precedents
// console.log(opp=add*div);

// // creation d une fonction qui demande l age

// function demanderAge() {
//    let age=prompt('Quel est votre age ? ');
//     alert(' Vous avez ' + age + ' ans. ');
// }
// demanderAge();

// // l age que j aurai !
// function prevoirAge() {
//     let age=prompt('Quel est votre age ? ');
//     //age++;
//     age=Number(age)
//     alert(' Vous avez ' + (age+1) + ' ans. ');
// }
// prevoirAge()


// // Conversion de donnee
// // nombre en String on fait :
// nombreEnString=nombreDeux.toString();
// // string en nombre, exemple : age='34'
// age=Number(age);

//  switch
// let consommable = "chocolat";

// switch (consommable) {

//     case "carotte":
//     case "courgette":
//         console.log("ceci est un légume");   
//         break;
    
//     case "banane":
//         console.log("ceci est un fruit");
//         break;

//     default:
//         console.log("ceci n'est ni un fruit ni un légume")
//         break;
// }


// // condition avec and(&&) et or(||) et utilisation de NOT(!)
// let gareDeDepart = "Valence";
// let gareDArrivee = prompt("ou veut tu aller?" ) || 'Gare de montpellier';
// let chauffeur    = "Frejus";

// if ((gareDeDepart !="" || gareDArrivee != "") && chauffeur != ""){
//     alert("le train va démarrer a destination de " + gareDArrivee + '.');
// }
// else{
//     alert("le train ne peut pas démarrer.");
// }


// // condition ternaire
// let x=9;
// x>3 ? console.log("x est superieur a tois") : console.log("x est inférieur a trois");


// // boucle while
// let x=1;
// while (x<10) {
//     console.log('ligne :'+ x);
//     x++;
// }


// // boucle do..while
// let prenom;
// do {
//     prenom = prompt('Quel est votre prénom ?');
// } while (prenom === '' || prenom === null);

// alert("Bonjour " + prenom);


// // boucle for

// for (let i =0; i < 5; i++) {
//     console.log('ligne:' + i);   
// }

// // boucle while avec break et continue

// let x=1;
// while (x<10) {
//     if (x == 4) {
//         x++;
//         continue;
//     }
//     else if(x==7){
//         break;
//     }
//     console.log('ligne :'+ x);
//     x++;
// }

// //  les exeptions : message d erreur

// try {
//     let recompense = prompt("choissisez une récompense entre : épée , arc");

//     switch (recompense) {
//         case "épée":
//         case "arc" :
//             break;
    
//         default:
//             throw new Error(recompense + " n'est ni épée ni arc, refait ton choix");
//             break;
//     }
//     alert("Vous avez bien choisi " + recompense + " .");
// } 
// catch (error){
//     // Erreur
//     alert(error);
// }
// finally{
//     alert('Fin du programme')
// }


// // fonction récursive
// function somme(x){
//     if (x==1) {
//         return x;
//     }
//     return x+somme(x-1);
// }
// console.log(somme(3));

// // fonction flechée

// let maFonction =() => console.log('test');
// maFonction();