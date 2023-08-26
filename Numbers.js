let a = 5;
console.log(a);

let b = 0.1;

console.log(b);

//precision 
let c = 0.2;

/**
 * Aqui se presenta un problema debido a que la suma de numero decimales no
 * es precisa se debe utilizar una funcion para tratar la precision de esta 
 * operacion 
 */
console.log(b+c);

console.log(Math.round((b+c) * 100)/100);
