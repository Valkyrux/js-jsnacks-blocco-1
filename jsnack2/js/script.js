//genero la lista dei nomi degli invitati della lista
const partyPeople = [];

for (let i = 0; i < 100; i++) {
    partyPeople.push("nome" + i);
}
//raccolgo il nome utente dal prompt 
const inputName = prompt("Inserisci il tuo nome");
// chiedo l'algoritmo che il mio utente vuole usare
const algorithm = prompt("Quale algoritmo usare? (Inserisci 'for' o 'while)");
// cerco il mio utente all'interno della lista con il for
if (algorithm == "for") {
    let isInMyList = false;
    for (let i = 0; i < partyPeople.length; i++) {
        if (inputName == partyPeople[i]) {
            isInMyList = true;
        }
    }
    if(isInMyList) {
        console.log("Benvenuto!");
    } else {
        console.log("Purtroppo il nome non è presente nella lista");
    }
}
// cerco il mio utente all'interno della lista con il while
if (algorithm == "while") {
    let i = 0;
    isInMyList = false
    while (i < partyPeople.length && !isInMyList) {
        if (inputName == partyPeople[i]) {
            isInMyList = true;
            console.log("Benvenuto Invitato!!!!");
        } else if (i == partyPeople.length - 1 && partyPeople[i] != inputName) {
            // questo else controlla solo l'ultimo elemento della lista al momento in cui il while ci arriva, perché non avendo trovato prima l'invitato allora non c'è se non è qui
            console.log("Vattene via!");
        }
        i++
    }
}