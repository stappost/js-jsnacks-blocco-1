// 1 - creare array con la lista della frutta
let fruits = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

// 2 - mettere la pesca nell'array
fruits.push('pesca')
console.log(fruits);

// 3 - creiamo variabile flag 
let flag =false;
// 4 - controlliamo ogni elemento dell'array per vedere se c'è il cocomero
// 5 - se c'è metto la variabile flag = true 

for(let i=0; i<fruits.length; i++){
    if(fruits[i] == "cocomero"){
        flag = true;
    }
    
}
// 6 - SE c'è 
//     6.1 - stampare "Trovato! Devo solo preparare il cocktail."
// 7 - ALTRIMENTI
//     7.1 - stampare "Oh no, devo uscire a comprare il cocomero!"
if(flag){
    console.log("Trovato! Devo solo preparare il cocktail.")
    }
else{
        console.log("Oh no, devo uscire a comprare il cocomero!")
    }
