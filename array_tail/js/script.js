// SCAFFOLDING LA CODA DELL'ARRAY
// 1 - chiediamo al cliente quanti elementi dovrà contenere l'array
let quantity = parseInt(prompt("scrivere in forma numerica di quanti elementi deve essere composto l'array"));

// 2 - creiamo array vuoto
let array = [];

// 3 - generiamo numeri casuali (da 1 a 100) tanti quanti sono quelli richiesti
// 4 - inseriamo i numeri nell'array
for(i=0; i<quantity; i++){
    let num = Math.floor(Math.random()*100)+1;
    array.push(num);
}
console.log(array);
// 5 - stampiamo gli ultimi 5 elementi
let elements=array.length-1
for(i=elements; i>elements-5; i--){
    console.log(array[i]);
}
