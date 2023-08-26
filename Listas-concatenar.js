/***
 * Como unir dos listas .concat(lista2)
 */

const lista1 = ['hola', 2, false, null]
const lista2 = ['adios', 8, true, undefined]
console.log(lista1.concat(lista2));

const lista3 = lista1.concat(lista2)
console.log(lista3);

//Como unir dos listas con el factor de propagacion
console.log(...lista3);

const lista4 = [...lista1, ...lista2]
console.log(lista4);


//ERROR !!! Mal entendido el concepto del factor de propagacion
/**
 * Lo siguiente lo que no hace, es agregar los 2 array dentro de un array nuevo
 * diferente al concepto de factor de propagación, ya que este factor
 * lo que hace es concatenar los datos mas no la estructura del array
 */
const lista5 = [lista1, lista2]
console.log(lista5);