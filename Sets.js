//Sets o conjuntos 
const array = [1, 2, 3, 4, 5, 6, 'Hola', {id:5}]

const miSet = new Set(array)
console.log(array)
console.log(miSet)

//Sets conjunto no ordenado de valores unicos, nos permite asegurarnos de que 
//no tenga datos repetidos

//.add() añadir valores a los Sets
miSet.add(9)
console.log(miSet)

/**Eliminar valores dentro de nuestros Sets
 * .delete()
 */

miSet.delete('Hola')
console.log(miSet)

/**Eliminar todos los elementos del set
 * miSet.clear()
 */

/**Como saber si mi Set tiene un valores
 *.has(), no devuelve un booleano
 */

 console.log(miSet.has(4))

 /**Conocer el tamaño de mi set, valores unicos */
 console.log(miSet.size)

 /**Como hacer iteracion de nuestro set, foreach */
 miSet.forEach(value => console.log(value))

 /**Obtener los valores del Set, lo podemos hacer de dos manera
  * con un objeto iterator
  */

 const it_miSet = miSet.values()
 console.log(it_miSet)

 //volver a convertir el set en array con el facotr de propagacion

 const ar_miSet = [...miSet]
 console.log(ar_miSet)
 console.log(ar_miSet[3])