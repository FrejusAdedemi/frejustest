// // // let mark=
// // // {
// // //     prenom:"Mark",
// // //     nom:"Zuckerberg",
// // //     email:"mark@FontFace.com"
// // // }

// // function Utilisateur(prenom,nom,email)
// // {
// //     this.prenom=prenom;
// //     this.nom=nom;
// //     this.email=email;
// // }
// // Utilisateur.prototype.sePresenter=function(){
// //     console.log("Je m'appelle "+this.prenom+" "+this.nom);
// // }
// // let bill=new Utilisateur("Bill","Gates","bill@gmail.com");
// // // bill.poste="PDG";
// // // console.log(bill);
// // function Logement(type, annee,placeParking,proprietaire)
// // {
// //     this.type=type;
// //     this.annee=annee;
// //     this.placeParking=placeParking;
// //     this.proprietaire=proprietaire;
// // }

// // var appartementA= new Logement('Appartement',2014,true,bill);

// // // console.log(appartementA.proprietaire.prenom);
// // //  console.log(appartementA); 
// // // console.log(bill);

// // var monObjet= new Object();
// // monObjet.pere="FRejus";
// // console.log(monObjet);
// // bill.sePresenter();

// // function Animal(nombreDePattes,poids)
// // {
// //     this.nombreDePattes=nombreDePattes;
// //     this.poids=poids;
// // }
// // Animal.prototype.presenter=function()
// // {
// //     console.log("il a "+ this.nombreDePattes + " pattes et pese "+ this.poids);
// // };
// // function Oiseau(nombreDePattes,poids,longueurDesAiles)
// // {
// //     Animal.call(this,nombreDePattes,poids);
// //     this.longueurDesAiles=longueurDesAiles;
// // }
// // Oiseau.prototype=Object.create(Animal.prototype);
// // Oiseau.prototype.constructor=Oiseau;
// // function Mammifere(nombreDePattes,poids,typePoil)
// // {
// //     Animal.call(this,nombreDePattes,poids);
// //     this.typePoil=typePoil;
// // }
// // Mammifere.prototype=Object.create(Animal.prototype);
// // Mammifere.prototype.constructor=Mammifere;
// // var perroquet = new Oiseau(2,1,2);
// // var lion=new Mammifere(4,"20 kg","fourure");
// // console.log(perroquet)
// // console.log(lion);
// // console.log()
// // lion.presenter();

// // class Utilisateur
// // {
// //     constructor(prenom,nom,email)
// //     {
// //         this.prenom=prenom;
// //         this.nom=nom;
// //         this.email=email;
// //     }
// //     sePresenter(){
// //         console.log("Je m'appelle "+this.prenom+" "+this.nom);
// //     }
// // }
// // var bill=new Utilisateur("Bill","Gates","bill@gmail.com");
// // bill.sePresenter();

// // class Animal
// // {
// //     constructor(nombreDePattes,poids)
// //     {
// //         this.nombreDePattes=nombreDePattes;
// //         this.poids=poids;
// //     }
// //     presenter()
// //     {
// //         console.log("il a "+ this.nombreDePattes + " pattes et pese "+ this.poids);
// //     }
// // }
// // class Oiseau extends Animal
// // {
// //     constructor(nombreDePattes,poids,longueurDesAiles)
// //     {
// //         super(nombreDePattes,poids);
// //         this.longueurDesAiles=longueurDesAiles;
// //     }
// //     voler()
// //     {
// //         console.log("Je vol sur "+this.longueurDesAiles+" m");
// //     }
// // }
// // class Mammifere extends Animal
// // {
// //     constructor(nombreDePattes,poids,typePoil)
// //     {
// //         super(nombreDePattes,poids);
// //         this.typePoil=typePoil;
// //     }
    
// // }

// // var perroquet = new Oiseau(2,"1 kg",2);
// // perroquet.presenter();
// // perroquet.voler();
// // var lion=new Mammifere(4,"20 kg","fourure");
// // lion.presenter();


// class Utilisateur
// {
//     constructor(prenom,nom,email)
//     {
//         this.prenom=prenom;
//         this.nom=nom;
//         this.email=email;
//     }
//     get nomComplet()
//     {
//         return this.prenom+" "+this.nom;
//     }
//     set nomComplet(nomComplet)
//     {
//         this.prenom=nomComplet.split(" ")[0];
//         this.nom=nomComplet.split(" ")[1];
//     }
//     sePresenter(){
//         console.log("Je m'appelle "+this.prenom+" "+this.nom);
//     }
// }

// var bill=new Utilisateur("Bill","Gates","bill@gmail.com");
// console.log(bill.nomComplet);
// bill.nomComplet="Mark Zuckerberg";
// console.log(bill.nomComplet);
// bill.sePresenter();

// 1er janvier 1970 a minuit UTC(londres)
// 45641531534531 + 604800

// let dateActuelle= new Date();
// console.log(dateActuelle);

// let dateEnSecondes=Date.now();
// console.log(dateEnSecondes);


// let datePrecise=new Date(2024,9,30,11,05);
// console.log(datePrecise);

// //donner dates en secondes
// let a=Date.now();
// console.log(a);

// let dateActuelle= new Date();
//  console.log(dateActuelle.getFullYear());
// console.log(dateActuelle.getDay());// 0 pour dimanche,1 pour lundi
// console.log(dateActuelle.getDate()); //donne date
// console.log(dateActuelle.getTime());// donne lheure en secondes

// console.log(dateActuelle.getUTCDay());

// dateActuelle.setFullYear(2029);
// console.log(dateActuelle.getFullYear());

// //date en format local exemple pour la france

// let dateActuelle=new Date();
// // toLocaleDateString=jour,mois,l'année
// // toLocaleTimeString=l'heure locale
// // toLocaleString=jour,mois,année et heure
// console.log(navigator.language);
// let dateLocale=dateActuelle.toLocaleString("fr-FR",{
//    weekday:'long',
//     year:'numeric',
//     month:'long',
//     day:'numeric',
//     hour:'numeric',
//     minute:'numeric',
//     second:'numeric'
// });

// console.log(dateLocale);

// let dateActuelle=new Date();
// let dateLocale=dateActuelle.toLocaleString("fr-FR");

// console.log(dateLocale);

// let prenom="john"
// let bonjour=`Bonjour ${prenom} !`;
// console.log(bonjour);
// let date=new Date().getFullYear();
// let copyright=`${date} @ Frejus`
// console.log(copyright);
// // faire des operations
// let aliments={fruits:2,legumes:4,bidcuits:7}
// let panier=`Dans votre panier, vous avez ${aliments.fruits+aliments.legumes+aliments.bidcuits} et ${aliments.poste='pdg'} `;
// console.log(panier);