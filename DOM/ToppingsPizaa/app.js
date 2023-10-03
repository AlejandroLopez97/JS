/**Obtener elementos por ID */

const titulo = document.getElementById('titulo');
console.log(titulo.tagName);

/**Obtener varios elementos por la misma clase */
const toppings = document.getElementsByClassName('topping');
console.log(toppings); //Obtenemos una coleccion de HTML
console.log(toppings.length);//obtenemos la longitud de la coleccion

//las coleccionesde HTML funcionan basicamente como un arreglo

console.log(toppings[0]);//Accedo al primer elemento de la colección 
console.log(toppings[0].id); //Accedo al id del primer elemento de la coleccion HTML

//Ingreso la coleccion de elementos de HTML a un arreglo JS
let arreglo = [];
for (let i = 0; i < toppings.length; i++) {
    arreglo[i] = toppings[i];
}

//Muestro los elementos que obtuve en el arreglo atraves de un foreach
arreglo.forEach(element => {
    console.log(element);
});

/**Seleccionar todos los elementos por etiqueta HTML */
const misToppings = document.getElementsByTagName('li');
console.log(misToppings); //mujestra una collecion de elementos de HTML

/**Seleccion de clase especifica */
const toppingsFondoMarron = document.getElementsByClassName('fondo-marron');
console.log(toppingsFondoMarron);

/**Selecionar elementos con base a selectores de CSS */
//querySelector selecciona el primer elementos que cumpla con el criterio
//de selector CSS
const aceituna = document.querySelector('#aceitunas');
console.log(typeof aceituna); //retorna un objeto

//Puedo juntar 2 selectores en una busqueda con el querySelector
const primerToppingNaranja = document.querySelector('.topping.fondo-naranja');
console.log(primerToppingNaranja);

