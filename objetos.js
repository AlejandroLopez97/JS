/**Trabjando con objetos */
const obj = {
    id: 4,
    nombre: 'Juan',
    apellido: 'Gonzalez',
    isDeveloper: true,
    libros_favoritos: ['El metodo', 'El codigo de la manifestacion'],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id);
console.log(obj["4-juegos"])

const prop = 'isDeveloper'
console.log(obj[prop])

//replicar el objeto, duplicacion en todo, memoria 
const obj2 = obj
console.log(obj2)

obj2.nombre = 'Alejo'
console.log(obj2.nombre)

console.log(obj.nombre)

//en tipos de datos primitivos no pasa eso, hace una copia y lo guarda en otro
//lugar de memoria

let val1 = 4
let val2 = val1

val2 = 6
console.log(val1)
console.log(val2);

/**Para clonar el objeto y no se asigne la misma dirección de memoria 
 * se clonan de la siguiente manera
 * const nuevoObjeto = {...objeto}
 */
const obj3 = {...obj}

console.log(obj.nombre);

obj3.nombre = 'Jorge'

console.log(obj.nombre);
console.log(obj3.nombre);

/**Como ordenar listas de objetos en funcion de una propiedad */

const listaPeliculas = [
    {title: 'Loque el viento se llevo', year: 1939},
    {title: 'titanic', year: 1997},
    {title: 'Moana', year: 2016},
    {title: 'El efecto mariposa', year: 2004},
    {title: 'TED', year: 2012}
]

console.log(listaPeliculas);

//Metodo .sort() -> muta el valor del array original

listaPeliculas.sort((a,b) => a.year - b.year)

console.log(listaPeliculas);
