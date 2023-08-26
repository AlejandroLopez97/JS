//Como obtener una lista a partir de la otra .slice()

const array = ['hola', 1 , 2 , 3 , true, null, 'adios']

//No modifica el valor de array original 
console.log(array.slice(1,4));

/**
 * para poder guardar el fragmento del array, debo crear un nuevo 
 * arreglo con esos datos que estoy extrayendo
 */

const array_extract = array.slice(1,4)
console.log(array_extract);

