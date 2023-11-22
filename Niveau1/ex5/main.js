const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un prix de vente : ', (vente) => {
    userConsole.question('Veuillez saisir un un prix de fabrication : ', (fabrication) => {
        const calcul = vente - fabrication;
        if (calcul > 0) {
            console.log("Profit");
        }
        else {
            console.log("Perte");
        }

        userConsole.close();
    });
});