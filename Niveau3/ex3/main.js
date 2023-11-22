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
        if (nombre % 2 == 1) {
            binary = "1" + binary;
        } else {
            binary = "0" + binary;
        }
        // divide number by 2.
        nombre = Math.floor(nombre / 2);

    }

    console.log(binary)
    userConsole.close();
});