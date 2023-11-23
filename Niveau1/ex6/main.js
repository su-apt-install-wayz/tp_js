const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un chiffre : ', (chiffre) => {
    // calcul modulo pour le reste de la division
    const calcul = chiffre%2;
    //si reste=0 => pair sinon impair
    if (calcul == 0) {
        console.log("Pair");
    }
    else {
        console.log("Impair");
    }

    userConsole.close();
});