//Manejo de modulos con JS

//formas de importar/exportar modulos
//1. CommonJs - require
//2. Import Es6 - import

//importar las funciones del modulo matematicas
const moduloMatematicas = require("./matematicas");
console.log(moduloMatematicas);

const fact = moduloMatematicas.factorial(5);
console.log(fact);

const sum = moduloMatematicas.suma(12, 90);
console.log(sum);