const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre) => {
    for (let i = 1; i <= nombre; i++) {
        console.log(' '.repeat(nombre - i) + '*'.repeat(2 * i - 1));
    }
    userConsole.close();
});