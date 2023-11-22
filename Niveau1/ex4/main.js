const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un âge : ', (age) => {
    if (age >= 12) {
        console.log("Cadet");
    }
    else if (age >= 10) {
        console.log("Minime");
    }
    else if (age >= 18) {
        console.log("Pupille");
    }
    else {
        console.log("Poussin");
    }
    userConsole.close();
});