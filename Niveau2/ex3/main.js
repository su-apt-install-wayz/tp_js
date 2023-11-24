const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre) => {
    let result = null;
    let sommeStringCalcul = "";
    for(let i=1; i <= nombre; i++) {
        // calcul de la somme 1 au nombre saisi
        result += i;
        // calcul uniquement pour l'affichage
        sommeStringCalcul += i;
        if (i < nombre) {
            // ajout du + après le chiffre en cours
            sommeStringCalcul += ' + ';
        }
    }
    console.log(sommeStringCalcul + " = " + result);
    userConsole.close();
});