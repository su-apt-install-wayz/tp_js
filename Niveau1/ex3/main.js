const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre1) => {
    userConsole.question('Veuillez saisir un autre nombre : ', (nombre2) => {
        const result = parseFloat(nombre1) + parseFloat(nombre2);
        console.log(nombre1 + " + " + nombre2 + " = " + result)
        userConsole.close();
    });
});