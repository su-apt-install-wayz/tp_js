const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un prix de vente : ', (vente) => {
    userConsole.question('Veuillez saisir un un prix de fabrication : ', (fabrication) => {
        // calcul pour savoir le profit ou la perte
        const calcul = vente - fabrication;
        // selon le résultat, Profit ou perte
        if (calcul > 0) {
            console.log("Profit");
        }
        else {
            console.log("Perte");
        }

        userConsole.close();
    });
});