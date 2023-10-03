/**Funciones de tipo flecha y anónimas ES6 año 2015*/

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map(value => value*2)
console.log(array2)

const dobleDelValor = valor =>valor*2

console.log(dobleDelValor(6))

const array3 = array.map(dobleDelValor)
console.log(array3);