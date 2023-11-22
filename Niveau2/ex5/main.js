const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre) => {
    for (let i=0; i<=nombre; i++) {
        console.log('*'.repeat(i));
    }
    for (let i=nombre; i>=1; i--) {
        console.log('*'.repeat(i - 1));
    }
    userConsole.close();
});