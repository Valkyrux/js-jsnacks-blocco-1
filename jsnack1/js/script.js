// chiedo all'utente se vuole utilizzare l'algoritmo con il for
let forMessage = prompt("Vuoi fare la somma con il for?? (scrivi si per continuare)");

if (forMessage == "si") {
    let numberSumFor = 0;
    for (let i = 0; i < 10; i++) {
        // numeri inseriti da prompt dall'utente
        let number = parseInt(prompt("Inserisci un numero"));
        // costruisco la somma dei numeri inseriti
        numberSumFor += number;
    }
    // stampo il risultato
    console.log(numberSumFor);
}
// chiedo all'utente se vuole utilizzare l'algoritmo con il while
let whileMessage = prompt("adesso vuoi fare la somma con il while?? (scrivi si per continuare)");
    
if (whileMessage == "si") {
    let j = 0;
    let numberSumWhile = 0;
    while (j < 10) {
        // numeri inseriti da prompt dall'utente
        let number = parseInt(prompt("Inserisci un numero"));
        // costruisco la somma dei numeri inseriti
        numberSumWhile += number;
        // incremento del contatore all'interno del while
        j++;
    }
    // stampo il risultato
    console.log(numberSumWhile);
}