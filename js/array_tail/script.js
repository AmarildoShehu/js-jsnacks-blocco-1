/* Creiamo un array chiedendo all'utente quanti elementi dovrà 
contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) 
per quanti sono gli elementi da inserire.
*/
// Stampiamo poi gli ultimi 5 elementi dell'Array
// Chiediamo all'utente quanti elementi dell'array dovremo stampare
// controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array


//1. chiediamo all'utente di inserire il numero di elementi che desidera nell'array.
//2. Creazione dell'array con numeri casuali compresi tra 1 e 100
//3. Controlliamo se l'input dell'utente è un numero valido e se è maggiore di zero
//4. Chiediamo all'utente quanti elementi vuole stampare
//5. Verifica se l'input dell'utente è valido
//6. Stampiamo gli ultimi 5 elementi dell'array



//1. chiediamo all'utente di inserire il numero di elementi che desidera nell'array.
const numElementi = parseInt(prompt("Inserisci il numero di elementi che desideri nell'array:"));

if (!isNaN(numElementi) && numElementi > 0) {
    let arrayCasuale = [];
    //2. Creazione dell'array con numeri casuali compresi tra 1 e 100
    for (let i = 0; i < numElementi; i++) {
        // Genera un numero casuale tra 1 e 100
        const numeroCasuale = Math.floor(Math.random() * 100) + 1; 
        // Aggiunge il numero casuale all'array
        arrayCasuale.push(numeroCasuale);
    }
//3. Controlliamo se l'input dell'utente è un numero valido e se è maggiore di zero
    console.log("Array generato:", arrayCasuale);

    //4. Chiediamo all'utente quanti elementi vuole stampare
    const numElementiDaStampare = parseInt(prompt("Quanti elementi dell'array vuoi stampare?"));

    //5. Verifica se l'input dell'utente è valido
    if (!isNaN(numElementiDaStampare) && numElementiDaStampare >= 0 && numElementiDaStampare <= numElementi) {
        console.log(`Stampo i primi ${numElementiDaStampare} elementi dell'array:`, arrayCasuale.slice(0, numElementiDaStampare));
    } else {
        console.log("Inserisci un numero valido compreso tra 0 e il numero di elementi nell'array generato.");
    }

//6. Stampiamo gli ultimi 5 elementi dell'array
    console.log("Stampo gli ultimi 5 elementi dell'array:", arrayCasuale.slice(-5));

} else {
    console.log("Inserisci un numero valido superiore a 0.");
}
