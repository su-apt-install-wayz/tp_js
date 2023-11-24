const notes = [20,12,16];

// boucle de 0 à la longueur du tableau dees notes
for(let i=0;i <= notes.length; i++) {
    // si note comprise entre 0 et 4 inclus
    if(notes[i] >= 0 && notes[i] <= 4) {
        console.log(notes[i] + " : Catastrophique, il faut tout revoir");
    }
    // si note comprise entre 5 et 10 inclus
    else if(notes[i] >= 5 && notes[i] <= 10) {
        console.log(notes[i] + " : Insuffisant");
    }
    // si note comprise entre 11 et 14 inclus
    else if(notes[i] >= 11 && notes[i] <= 14) {
        console.log(notes[i] + " : Peut mieux faire");
    }
    // si note comprise entre 15 et 17 inclus
    else if(notes[i] >= 15 && notes[i] <= 17) {
        console.log(notes[i] + " : Bien");
    }
    // si note comprise entre 18 et 20 inclus
    else if(notes[i] >= 18 && notes[i] <= 20) {
        console.log(notes[i] + " : Excellent, bon travail");
    }
    // si note n'est pas comprise entre 0 et 20 
    else if(notes[i] < 0 && notes[i] > 20){
        console.log("Note invalide : "+notes[i]);
    }
}