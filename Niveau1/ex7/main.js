const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un chiffre : ', (chiffre) => {
    chiffre = parseFloat(chiffre);
    // si > 0 => positif
    if(chiffre > 0) {
        console.log("Positif");
    }
    // si < 0 => négatif
    else if(chiffre < 0) {
        console.log("Négatif");
    }
    // si = 0 => nul
    else if(chiffre = 0) {
        console.log("Nul");
    }
    // autre => invalide
    else {
        console.log("Invalide");
    }
    userConsole.close();
});