const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre) => {
    for (let i=0; i<=nombre; i++) {
        if(i%3 == 0) {
            console.log("FIZZ");
        }
        else if(i%5 == 0) {
            console.log("BUZZ");
        }
        else if(i%3 == 0 && i%5 == 0) {
            console.log("FIZZBUZZ");
        }
        else {
            console.log(i)
        }
    }
    
    userConsole.close();
});