const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre) => {
    // boucle de 1 jusqu'au nombre saisi
    for (let i=0; i<=nombre; i++) {
        // print autant de fois i l'*
        console.log('*'.repeat(i));
    }
    userConsole.close();
});