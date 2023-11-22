let tableau = [5,8,9,15,25,4]

function SommeTableau(monTableau) {
    let somme = null;
    for (let i = 0; i < monTableau.length; i++) {
        somme += monTableau[i];
    }
    console.log("Somme des éléments du tableau : " + somme);
}

SommeTableau(tableau);