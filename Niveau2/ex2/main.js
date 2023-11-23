const notes = [20,12,16];

for(let i=0;i <= notes.length; i++) {
    if(notes[i] >= 0 && notes[i] <= 4) {
        console.log(notes[i] + " : Catastrophique, il faut tout revoir");
    }
    else if(notes[i] >= 5 && notes[i] <= 10) {
        console.log(notes[i] + " : Insuffisant");
    }
    else if(notes[i] >= 11 && notes[i] <= 14) {
        console.log(notes[i] + " : Peut mieux faire");
    }
    else if(notes[i] >= 15 && notes[i] <= 17) {
        console.log(notes[i] + " : Bien");
    }
    else if(notes[i] >= 18 && notes[i] <= 20) {
        console.log(notes[i] + " : Excellent, bon travail");
    }
    else if(notes[i] < 0 && notes[i] > 20){
        console.log("Note invalide : "+notes[i]);
    }
}