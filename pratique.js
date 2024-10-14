//  exercice 1
function createCounter(startAt = 0) {
    let count = startAt;
    return function() {

function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}
const counter = createCounter();
counter();
counter();
    }
}
// exercice 2
function createGreeter(prenom) {
    return () =>console.log("Bonjour " + prenom);
}
const greetFrejus=createGreeter("Frejus");
greetFrejus();
const greetAli = createGreeter('Ali');
greetAli();

// exercice3 
function createAdder(a) {
    return b=>(a+b);
}
const add5 =createAdder(5);
console.log(add5(10));
console.log(add5(20));

// exercice 4
const voiture={
    marque: 'Toyota',
    modele: 'Corolla',
    annee: 2020,
    afficherInfo: ()=> console.log(voiture.marque,voiture.modele,voiture.annee)
}
console.log(voiture.afficherInfo());