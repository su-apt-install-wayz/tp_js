const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//input dans la console
userConsole.question('Veuillez saisir votre nom : ', (resUser) => {
    console.log(`Bienvenue ${resUser} !`);
    userConsole.close();
});