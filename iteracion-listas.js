//iterar los valores de una lista

const array = ['texto', 34, false, undefined, 45, 'otro texto']

//Forma poco eficiente
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//forma ES6 (mas eficiente)
let suma = 0;
const array_nums = [4, 5, 23, 78, 123, 943]

array_nums.forEach(value => {
    suma+= value
})
console.log(suma);

array.forEach(valor => {
    console.log(valor);
})

//Busqueda de un valor dentro de una lista .find()
//buscar elemento 45 de array
const variable = array.find(value => {
    if (value === 45) {
        return true
    }
})
console.log(variable);

const objetoPersona = [
    {nombre: 'Alejandro', edad: 26},
    {nombre: 'Daniela', edad:28},
    {nombre: 'Juan', edad:2},
    {nombre: 'Rodrigo', edad:85},
    {nombre: 'Daniel', edad:31}
]

const persona = objetoPersona.find(nombre => nombre.nombre === 'Alejandro')
console.log(persona.edad);

//de esta forma no es necesario apuntar a la edad con el objeto
//como se realiza en el ejemplo anterior
const {edad} = objetoPersona.find(nombre => nombre.nombre === 'Alejandro')
console.log(edad);