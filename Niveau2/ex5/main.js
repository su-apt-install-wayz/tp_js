const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre) => {
    // boucle de 1 jusqu'au nombre saisi
    for (let i=0; i<=nombre; i++) {
        console.log('*'.repeat(i));
    }
    // boucle allant du nombre à 1
    for (let i=nombre; i>=1; i--) {
        // print l'* i fois - 1 pour former la pyramide
        console.log('*'.repeat(i - 1));
    }
    userConsole.close();
});