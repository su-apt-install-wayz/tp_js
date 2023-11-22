const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un chiffre : ', (chiffre) => {
    chiffre = parseFloat(chiffre);
    if(chiffre > 0) {
        console.log("Positif");
    }
    else if(chiffre < 0) {
        console.log("Négatif");
    }
    else if(chiffre = 0) {
        console.log("Nul");
    }
    else {
        console.log("Invalide");
    }
    userConsole.close();
});