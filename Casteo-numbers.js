//operador .valueOf() obtener valores numericos a partir de literales 
let a = 2
let b = new Number(3) //casteo

console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());

let str = new String("Hola soy un string")
console.log(str);
console.log(str.valueOf());

//NaN (Not a Number) infinity
let n = Number('adios')
console.log(n);
console.log(isNaN(n));

let numerador = 19
let divisor = 0
let divisor_2 = null

console.log(numerador / divisor);
console.log(numerador / divisor_2);

//Numeros hexadecimales 
let numHex = '0x3a5b7'
console.log(parseInt(numHex, 16));//luego de la , va la base del numero


//Convertir string a valores numericos
let numero = '5.89'
let num2 = 17.2

console.log(typeof numero);
console.log(numero + num2);//Error de concepto

console.log(typeof Number(numero));
console.log(Number(numero) + num2);

console.log(parseInt(numero));//conversion a entero
console.log(parseFloat(numero));//conversion a decimal


//Obtener el valor maximo y minimo 
/**
 * Como gestionar la memoria y los numeros en js
 */
let min_precision = Number.EPSILON
let min_valor_JS = Number.MIN_VALUE
let max_valor_js = Number.MAX_VALUE

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_js);
console.log(2 ** 1023);
