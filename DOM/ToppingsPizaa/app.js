/**Obtener elementos por ID */

const titulo1 = document.getElementById('titulo');
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

//Obtengo a traves de un selector CSS con la utilidad del :not
const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
console.log(primerToppingNoMarron);

//QuerySelectorAll donde puedo utilizar selector de CSS, pero me trae todos los 
//Elementos del DOM que cumplan con dicho selector, retorna una NodeList
//Lista de nodos
const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsNaranja);
console.log(toppingsNaranja[0]);
console.log(toppingsNaranja.length); //miro la cantidad de elementos
//Las listas de nodos son identificados en JS con objetos de JS y pueden ser tratados
//de dicha manera.


/**ASIGNAR ESTILOS EN EL DOM CON JS */
const primerTopping = document.querySelector('.topping');

//con style podemos asignarle stilo CSS3
console.log(primerTopping.style); //para ver todas las propiedades que puedo personalizar
//Con la notacion de punto se adicionan estilos en linea, osea que le agrega 
//la propiedad Style: a la etiqueta HTML
primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';

const listaDeToppings = document.getElementById('lista-toppings');
console.log(listaDeToppings.innerText); //texto interno retornando cadena de caracteres
console.log(listaDeToppings.textContent); //similar al innerText pero trae los espacios que tiene ese texto en el HTML

//Retorna la estructura HTML de la etiqueta en una cadena de caracteres
console.log(listaDeToppings.innerHTML);

/**Modificar ese texto obtenido */
const titulo = document.getElementById('titulo');
console.log(titulo);
//console.log(titulo.innerText);

titulo.innerText = 'Mis Toppings Favoritos';


/**Modificar los atributos de un elemento */
const enlace = document.getElementsByTagName('a');
console.log(enlace);
console.log(enlace[0].getAttribute('href')); //obtiene el atributo
//console.log(enlace[0].removeAttribute('href')); ELimina el atributo
console.log(enlace[0].setAttribute('href', 'https://www.freecodecamp.org')); //Modifica el atributo

/**CLASES CON JS EN EL DOM */
const firstTopping = document.querySelector('.topping');
console.log(firstTopping);
console.log(firstTopping.classList);

//Para la clase de la etiqueta 
firstTopping.classList.add('texto-verde');

//Verificar si existe una clase 
console.log(firstTopping.classList.contains('fondo-marron'));
console.log(firstTopping.classList.contains('fondo-azul'));

//Remover una clase de la etiqueta que hemos capturado
firstTopping.classList.remove('topping');

/**OPERACIONES IMPORTANTES EN EL DOM */
//Creo el elemento
const listaDeToppings_ = document.getElementById('lista-toppings');
const toppingNuevo = document.createElement('li'); //tipo lista
//Le asigno unas clases al elemento y un texto
toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Queso Extra';

listaDeToppings_.append(toppingNuevo);//Agrego el nuevo elemento creado

toppingNuevo.remove();//Elimino el elemento

/**Para agregar un elemento tambien utlizamos 
 * appendChild() que nos agrega especificamente un elemento HTML
 * mientras que el metodo append() nos permite agregar tanto elementos HTML
 * como texto, donde le indiquemos que se agregue.
 */

/**RECORRER EL DOM  */
//Obtenemos el elemento padre HTML de la etiqueta trabajada
//Se obtiene con parentElement
console.log(listaDeToppings_.parentElement);

//Con parentNode obtenemos el nodo, esto implica que obtenemos tanto
//etiquetas HTML y texto que se encuentra dentro del elemento que estamos explorando

//De esta manera obtenemos mas a profundidad los elementos padres 
console.log(listaDeToppings_.parentElement.parentElement);

//para obtener los elementos hijos utilizamos la propiedad children
console.log(listaDeToppings_.children); //nos devuelve los hijos HTML
console.log(listaDeToppings_.firstChild);//nos devuelve el primer nodo hijo
console.log(listaDeToppings_.children[0]); //nos devuelve el primer elemento HTML
console.log(listaDeToppings_.firstElementChild); //tambien nos devuelve el primer elemento HTML
console.log(listaDeToppings_.lastChild);//nos devuelve el ultimo nodo hijo
console.log(listaDeToppings_.lastElementChild);//nos devuelve el ultimo elemento HTML

//Para obtener los elementos hermanos
console.log(listaDeToppings_.previousElementSibling);//Nos devuelve el elemento HTML hermano anterior
console.log(listaDeToppings_.nextElementSibling);//nos devuelve el elemento HTML hermano siguiente
console.log(listaDeToppings_.previousSibling); //nos devuelve el nodo hermano anterior
console.log(listaDeToppings_.nextSibling); // nos devuelve el nodo hermano siguiente

/**EVENTOS EN EL DOM     */