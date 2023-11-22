const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre) => {
    let result = null;
    let sommeStringCalcul = "";
    for(let i=1; i <= nombre; i++) {
        result += i;
        sommeStringCalcul += i;
        if (i < nombre) {
            sommeStringCalcul += ' + ';
        }
    }
    console.log(sommeStringCalcul + " = " + result);
    userConsole.close();
});