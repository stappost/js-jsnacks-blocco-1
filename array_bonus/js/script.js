
// 1 - creare due array vuoti
let array1 = [];
let array2 = [];
// 2 - creare 3 numeri casuali e aggiungerli al primo array
for(i=0; i<3; i++){
    array1.push(Math.floor(Math.random()*100)+1);
}
console.log(array1)
// 3 - creare 7 numeri casuali e aggiungerli al secondo array
for(i=0; i<7; i++){
    array2.push(Math.floor(Math.random()*100)+1);
}
console.log(array2)
// 4 - creare variabile = differenza tra i due array e ciclo che aggiunge al primo array numeri casuali fino a raggiungere il secondo

let diff = array2.length - array1.length;
for(i=0; i<diff; i++){
    array1.push(Math.floor(Math.random()*100)+1);
}
console.log(array1)
