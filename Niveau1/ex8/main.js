const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un chiffre : ', (chiffre) => {
    // table de multiplication entière
    for(let i = 1;i<=10;i++) {
        //calcul pour chaque multiplication de la table
        result = chiffre * i;
        console.log(chiffre + " x " + i + " = " + result);
    }
    userConsole.close();
});