const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un chiffre : ', (chiffre) => {
    const calcul = chiffre%2;
    if (calcul == 0) {
        console.log("Pair");
    }
    else {
        console.log("Impair");
    }

    userConsole.close();
});