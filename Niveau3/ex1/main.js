const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre) => {
    // boucle de 0 à nombre
    for (let i=0; i<=nombre; i++) {
        // si reste de la division par 3 = 0
        if(i%3 == 0) {
            console.log("FIZZ");
        }
        // si reste de la division par 5 = 0
        else if(i%5 == 0) {
            console.log("BUZZ");
        }
        // si reste de la division par 3 = 0 et par 5 = 0
        else if(i%3 == 0 && i%5 == 0) {
            console.log("FIZZBUZZ");
        }
        // autres
        else {
            console.log(i)
        }
    }
    
    userConsole.close();
});