/**Carga y sobrecarga de funciones */

function saludar() {
    hola()
}

function hola(){
    console.log('Hola! soy la funcion hola()');
}

saludar()

/////

//1. carga la funcion global 
//2. añade la funcion saludar por encima de la funcion global 
//3. descubre que debe llamar la funcion hola y se sobre pone de saludar y global

// function recursiva(){
//     recursiva()
// }

// recursiva()