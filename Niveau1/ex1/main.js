const readline = require('readline');

const affUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

affUser.question('Veuillez saisir votre nom : ', (resUser) => {
    console.log(`Bienvenue ${resUser} !`);
    affUser.close();
});