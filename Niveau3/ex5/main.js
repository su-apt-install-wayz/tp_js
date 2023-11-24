
// pas encore fini


const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Déclaration de bonusStrike en dehors de la fonction
let bonusStrike = 0;
let bonusSpare = 0;

// Fonction pour calculer le score du bowling
function calculerScore() {
    let scoreTotal = 0;
    let tourActuel = 1;
    let lancerActuel = 1;
    let toursRestants = 10;  // Nombre total de tours

    function obtenirQuilles() {
        userConsole.question(`Tour N° ${tourActuel}, Lancer N° ${lancerActuel}: Entrez le nombre de quilles abattues : `, (quillesAbattues) => {
            // Vérifier si l'utilisateur a cliqué sur Annuler ou n'a rien saisi
            if (quillesAbattues === null || quillesAbattues === "") {
                userConsole.close();
                return;
            }
    
            quillesAbattuesInt = parseInt(quillesAbattues);
    
            // Gestion du strike
            if (quillesAbattuesInt === 10 && lancerActuel === 1) {
                scoreTotal += 10;
    
                // Ajouter le bonusStrike des deux prochains lancers (si disponibles)
                if (tourActuel < 10) {
                    bonusStrike += 2; // Attendre deux lancers suivants pour ajouter le bonus
                }
    
                afficherScore();
                tourActuel++;
                toursRestants--;
                lancerActuel = 1;
            } else {
                // Gestion des spares
                if (quillesAbattuesInt + (parseInt(bonusSpare) || 0) === 10 && lancerActuel === 1) {
                    console.log(`Tour N° ${tourActuel}, Lancer N° ${lancerActuel}, Score partiel: ${scoreTotal}`);
                    console.log("Bonus pour le spare: ");
                    bonusSpare = userConsole.question("Entrez le bonus pour le spare: ");
                } else {
                    // Gestion des autres cas
                    scoreTotal += quillesAbattuesInt;
    
                    // Ajouter le bonus du spare (pour le tour précédent) au score du strike
                    if (lancerActuel === 2 && bonusSpare > 0) {
                        scoreTotal += bonusSpare;
                        bonusSpare = 0; // Réinitialiser le bonusSpare après utilisation
                    }
    
                    // Ajouter le bonus du strike (pour le tour précédent) au score du strike
                    if (bonusStrike > 0) {
                        scoreTotal += quillesAbattuesInt;
                        bonusStrike--; // Décrémenter le bonusStrike après utilisation
                    }
    
                    afficherScore();
    
                    // Passage au lancer suivant ou au tour suivant
                    if (lancerActuel === 2) {
                        lancerActuel = 1;
                        tourActuel++;
                        toursRestants--;
                    } else {
                        lancerActuel = 2;
                    }
                }
            }
    
            // Vérifier si tous les tours ont été joués
            if (toursRestants > 0) {
                // Appeler obtenirQuilles() ici pour passer au prochain lancer ou au tour suivant
                obtenirQuilles();
            } else {
                // Afficher le score final une fois que tous les tours ont été joués
                console.log(`Score final: ${scoreTotal}`);
                userConsole.close();
            }
        });
    }      

    function afficherScore() {
        // Affichage du score en direct
        console.log(`Tour: ${tourActuel}, Lancer: ${lancerActuel}, Score partiel: ${scoreTotal}`);
    }

    obtenirQuilles();
}

// Appel de la fonction pour commencer le jeu
calculerScore();