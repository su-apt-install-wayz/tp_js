let tableau = [5,8,9,15,25,4]

function SommeTableau(monTableau) {
    let somme = null;
    // parcourir chaque élément du tableau
    for (let i = 0; i < monTableau.length; i++) {
        // ajout de la valeur i du tableau à la somme
        somme += monTableau[i];
    }
    console.log("Somme des éléments du tableau : " + somme);
}

SommeTableau(tableau);