// 1. Créer et ajouter un paragraphe au corps du document
let paragraph = document.createElement("p");
paragraph.textContent = "Ceci est un paragraphe créé dynamiquement.";
document.body.appendChild(paragraph);

// 2. Créer et ajouter un bouton au corps du document
let button = document.createElement("button");
button.textContent = "Changer la couleur du paragraphe";
document.body.appendChild(button);

// 3. Ajouter un événement 'click' au bouton pour changer la couleur du paragraphe
button.addEventListener("click", function() {
  // Changer la couleur du texte du paragraphe de manière aléatoire
  let colors = ["red", "blue", "green", "orange", "purple"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  paragraph.style.color = randomColor;
});
