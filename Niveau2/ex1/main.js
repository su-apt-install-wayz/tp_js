const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un premier nombre : ', (nombre1) => {
    userConsole.question('Veuillez saisir un second nombre : ', (nombre2) => {
        userConsole.question('Veuillez saisir un troisième nombre : ', (nombre3) => {
            let numero1 = parseFloat(nombre1);
            let numero2 = parseFloat(nombre2);
            let numero3 = parseFloat(nombre3);

            if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
                console.log('Nombres invalides.');
            } else {
                // connaitre le plus grand des 3 nombres
                let plusGrand = Math.max(numero1, numero2, numero3);
                console.log(`[${numero1}, ${numero2}, ${numero3}] --> ${plusGrand}`);
            }
            userConsole.close();
        });
    });
});