console.log('JS OK');
// Fasi
// 1. creare l'array con la frutta del frigorifero
// 2. aggiungere la pesca all'array della frutta
// 3. verificare se nell'array di frutta c'è il cocomero:
//    - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
//    - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"

// 1. creare l'array con la frutta del frigorifero
const fruttaFrigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino',
 'cocomero', 'limone', 'fragola'];
console.log(fruttaFrigorifero);

 // 2. aggiungere la pesca all'array della frutta
 fruttaFrigorifero.push('pesca');
 console.log(fruttaFrigorifero);

//  3. verificare se nell'array di frutta c'è il cocomero:
let cocomeroPresente = false;

 for (let i = 0; i < fruttaFrigorifero.length; i++) {
    if (fruttaFrigorifero[i] === 'cocomero') {} 
    else {
        cocomeroPresente = true;
    }
}

if (cocomeroPresente) {
    console.log("Trovato! Devo solo preparare il cocktail.");
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}