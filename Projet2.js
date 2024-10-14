document.querySelector("#a-supprimer").remove();

let header=document.createElement("header");
header.textContent="Bienvenue";
document.body.append(header);

let menu=document.createElement("div");
menu.innerHTML="<a href='#''>Accueil</a> / <a href='index.html'>Une autre page</a>";
document.body.append(menu);

let paragraph=document.createElement("p");
paragraph.textContent="Ceci est un paragraphe créé avec JavaScript ! ";
document.body.append(paragraph);