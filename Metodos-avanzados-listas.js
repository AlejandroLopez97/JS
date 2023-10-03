/**
 * trabajar con metodos avanzados 
 * .map() .filter() .reduce()
 */

const array = ['Bogota', 'Medellin', 'Cali', 'Barranquilla', 'Cartagena']

/**
 * el forEach() me recorre todos los valores del array, pero no me retorna 
 * ningun valor si deseo almacenar en otra estructura o variable 
 */
const val = array.forEach(value => {
    console.log(value);
})

console.log(val);

/**
 * Aqui en el map le envio dos parametro:
 * primero: este es el valor que contiene cada posicion del array
 * segundo: este es el indice de cada posicion del array
 * con esto modifico el array que tenia y le ingreso a los valores un indicativo
 */
const newArray = array.map((value,indice) => `${indice}-${value}`)
console.log(newArray);

/**
 *  filter
 */

const arrayObj = [
    {nombre: 'Daniela', edad: 28},
    {nombre: 'ALejandro', edad: 26},
    {nombre: 'Alaska', edad: 4},
    {nombre: 'Juan', edad: 2},
    {nombre: 'Samuel', edad: 1},
    {nombre: 'Fredy', edad: 28},
    {nombre: 'Jairo', edad: 32}
]

//filtro personas mayores a 30 años de edad
const personasMayores = arrayObj.filter(obj => obj.edad > 30)
console.log(personasMayores)

const newList = arrayObj.filter(obj => obj.nombre !== 'Jairo')
console.log(newList)

/**
 * Reduce, sirve para obtener un elemento a partir de una lista
 * 
 */

//cur es cada objeto de la lista u objeto y agr es un valor acumulativo a medida que
// se va ejecutando
const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    return acumulado + cur
})
console.log(suma);

//const suma = arrayObj.reduce((agr, cur) => agr + cur.edad)