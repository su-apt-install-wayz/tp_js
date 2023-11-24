const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre) => {
    let binary = "";

    if (nombre < 0) {
        console.log("Saisissez un nombre positif")
    }


    while (nombre > 0) {
        // si reste par 2 = 1, on met 1 sinon 0
        if (nombre % 2 == 1) {
            binary = "1" + binary;
        } else {
            binary = "0" + binary;
        }
        // divise le nombre par 2 pour continuer le while
        nombre = Math.floor(nombre / 2);

    }

    console.log(binary)
    userConsole.close();
});