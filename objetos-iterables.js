//some(), donde busca si alguno cumple la condicion

const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = array.some(valor => valor < 0)
console.log(res)

const existe = array.some(value => value === 9)
console.log(existe)

const personas = [
    {nombre: 'Daniela', edad: 28},
    {nombre: 'Alejandro', edad: 26},
    {nombre: 'Alaska', edad: 4},
    {nombre: 'Juan', edad: 2},
    {nombre: 'Samuel', edad: 1},
    {nombre: 'Fredy', edad: 28},
    {nombre: 'Jairo', edad: 32}
]

const existeAlejo = personas.some(person => person.nombre === 'Alejandro')
console.log(existeAlejo);

//Como obtener una lista a partir de un objeto iterable
const str = 'Hola soy Alejandro'
console.log(str[2])

const arrStr = Array.from(str) //convierte un string en array
console.log(arrStr)

const set = new Set([2, 3, 'hola', 4])
const arSet = Array.from(set)
console.log(arSet)

//keys()
const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)//nos devuelve los indices como keys
console.log(ar_keys)