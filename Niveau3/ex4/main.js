const readline = require('readline');

const userConsole = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

userConsole.question('Veuillez saisir un nombre : ', (nombre) => {
    let decimal = parseInt(nombre)

    // tableau de correspondance entre les nombres et la valeur en chiffre romain
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = ''

    // parcourir le tableau du dessus
    for (let i = 0; i < romanNumerals.length; i++) {
        // tant que le nombre est supérieur à une valeur du tableau
        while (decimal >= romanNumerals[i].value) {
            // on rajoute au result la valeur en chiffre romain
            result += romanNumerals[i].numeral
            // ici, on enlève la valeur en chiffre pour continuer le while 
            decimal -= romanNumerals[i].value
        }
    }

    console.log('En nombre romain : ' + result)
    userConsole.close()
})
