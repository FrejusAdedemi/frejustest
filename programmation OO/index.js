// let mark={
//     name:"mark",
//     age:25,
//     email:"wqJbV@example.com",
//     phone:"1234567890",

//     sePresenter:function(){
//         console.log(this.name+" "+this.age+" "+this.email+" "+this.phone);
//     }
// }

// fonction constructeur
function Utilisateur(prenom, nom, age, email)
{
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.email = email;
    
}
let mark =new Utilisateur ("mark", "john", 25, "wqJbV@example.com");
// console.log(mark);
console.log(mark.nom);