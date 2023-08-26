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
