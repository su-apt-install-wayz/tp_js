const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fonction principale du jeu
function leJeu(justePrix, vie) {
    userConsole.question('Veuillez saisir un juste prix : ', (nombreUser) => {
        // Vérifier si l'utilisateur a encore des vies
        if (vie != 0) {
            // Vérifier si la saisie de l'utilisateur est différente du juste prix
            if (nombreUser != justePrix) {
                // Comparer la saisie de l'utilisateur avec le juste prix
                if (nombreUser > justePrix) {
                    console.log("C'est Moins");
                    vie--;
                } else if (nombreUser < justePrix) {
                    console.log("C'est Plus");
                    vie--;
                }
                // Vérifier s'il reste des vies
                if (vie != 0) {
                    // Appeler récursivement la fonction leJeu pour la prochaine tentative
                    leJeu(justePrix, vie);
                } else {
                    console.log("C'est perdu");
                    userConsole.close();
                }
            } else {
                console.log("Juste Prix !!!");
                userConsole.close();
            }
        } else {
            console.log("C'est perdu");
            userConsole.close();
        }
    });
}

userConsole.question('Veuillez saisir un nombre d\'échec : ', (nombreEchec) => {
    userConsole.question('Veuillez saisir un nombre max : ', (nombreMax) => {
        // Générer un juste prix aléatoire entre 0 et nombreMax
        let justePrix = Math.floor(Math.random() * nombreMax);
        // Initialiser le nombre de vies avec le nombre d'échecs saisi par l'utilisateur
        let vie = nombreEchec;

        // Appeler la fonction leJeu pour commencer le jeu
        leJeu(justePrix, vie);
    });
});
