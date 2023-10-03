//Manejo de modulos con JS

//formas de importar/exportar modulos
//1. CommonJs - require
//2. Import Es6 - import

//importar las funciones del modulo matematicas
// const moduloMatematicas = require("./matematicas");
// console.log(moduloMatematicas);

//manera mas limpia de hacer importe de las funciones
//que se necesiten, con la destructuración de objetos.
const {factorial, suma} = require("./matematicas");

const fact = factorial(5);
console.log(fact);

const sum = suma(12, 90);
console.log(sum);