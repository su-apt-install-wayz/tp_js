const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function leJeu(justePrix, vie) {
    userConsole.question('Veuillez saisir un juste prix : ', (nombreUser) => {
        if(vie != 0) {
            if (nombreUser != justePrix) {
                if (nombreUser > justePrix) {
                    console.log("C'est Moins");
                    vie--;
                }
                else if(nombreUser < justePrix) {
                    console.log("C'est Plus");
                    vie--;
                }
                if(vie != 0) {
                    leJeu(justePrix, vie);
                }
                else {
                    console.log("C'est perdu");
                    userConsole.close();
                }
            }
            else {
                console.log("Juste Prix !!!");
                userConsole.close();
            }

        }
        else {
            console.log("C'est perdu");
            userConsole.close();
        }
    });
}

userConsole.question('Veuillez saisir un nombre d\'échec : ', (nombreEchec) => {
    userConsole.question('Veuillez saisir un nombre max : ', (nombreMax) => {
        let justePrix = Math.floor(Math.random() * (nombreMax));
        let vie = nombreEchec;

        leJeu(justePrix, vie);

    }); 
});