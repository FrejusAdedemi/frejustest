document.getElementById("changer").addEventListener("click", function() {
    // Affiche une boîte de dialogue pour demander la ville
    let villeChoisie = prompt("Entrez le nom de la ville :");
    
    // Vérifie que l'utilisateur a saisi une ville
    if (villeChoisie) {
        ville = villeChoisie;
        document.getElementById("ville").textContent = ville;

        // Met à jour l'URL avec la nouvelle ville et envoie une requête pour obtenir les données
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&APPID=834ecad26dd2c124b0c28d31eb188f46&units=metric';

        let requete = new XMLHttpRequest();
        requete.open("GET", url);
        requete.responseType = "json";
        requete.send();

        requete.onload = function() {
            if (requete.readyState === XMLHttpRequest.DONE) {
                if (requete.status === 200) {
                    let response = requete.response;
                    console.log(response);

                    // Mettre à jour la température dans l'interface
                    let temperature = response.main.temp;
                    document.getElementById("temperature_label").textContent = temperature;
                } else {
                    alert("Une erreur est survenue");
                }
            }
        };
    }
});
