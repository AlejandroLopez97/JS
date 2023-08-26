/**
 * Como trabajar con listas
 */

let var1 = {id: false}
let array = [1, 'hola', false, {id: 5}, null, undefined, {id: false}]

console.log(array);

//acceder a varios valores de los array
console.log(array[0]);
console.log(array[1]);

/**
 * Metodos para introducir valores nuevos en nuestros arreglos
 * .push() .unshift() Mutan el valor de nuestro array 
 * ingresar valores al final del array Push
 */

array.push('Final')
console.log(array);

//valores al principio 

array.unshift('inicio')
console.log(array);

//Meotodos para eliminar valores en arrays
//.pop() .shift() Mutan el valor del array 

//Valores al final .pop()
array.pop()
console.log(array);

//Valores al principio .shift()
array.shift()
console.log(array);

//Metodo para eliminar, modificar o añadir valores en nuestro array
/**
 * Nos elimina la cantidad de valores que le indiquemos
 * el primer parametro es la posicion de donde incia
 * el segundo parametro es la cantidad de valores que le estoy indicando eliminar
 */
let array2 = [1, 2, 3, 4, 5, 6, 7]
array2.splice(2, 2)
console.log(array2);

//añadir valores con splice(indice, 0, valores)
/**
 * Para agregar valores sin eliminar, el segundo parametro debe ser 0
 */
array2.splice(3, 0,'Hola', 'Maria')
console.log(array2);

//Modificar valores .splice(indice, 1, valores)
/**
 * debo indicarle que elimino y valor y añado otro
 */
array2.splice(3, 1, 'Hola de nuevo')
console.log(array2);