const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre) => {
    for (let i = 1; i <= nombre; i++) {
        // print d'espaces vides avant l'étoile par rapport au calcul, puis * autant de fois par rapport au calcul pour former une pyramide
        console.log(' '.repeat(nombre - i) + '*'.repeat(2 * i - 1));
    }
    userConsole.close();
});