/**
 * principales operaciones aritmeticas
 */
let a = 3.5
let b = 4.8

//suma 
console.log(a+b);
//resta
console.log(a-b);
//Multiplicacion
console.log(a*b);
//Division
console.log(a/b);

//representacion de los números en cadenas de texto 
console.log(typeof a);
let a_s = a.toString()

console.log(a_s);
console.log(typeof a_s);

//redonde de números decimales
let c = 3.3
let d = c*3

console.log(d);
console.log(typeof d);

 //.toFixed(x), le debo enviar como parametro la cantidad de decimales que deseo
 console.log(d.toFixed(1));
 console.log(typeof d.toFixed(1));

 //toPrecision(x) limita el numero de cifras significativas
 console.log(d.toPrecision(3));
 console.log(typeof d.toPrecision(3));

 //
