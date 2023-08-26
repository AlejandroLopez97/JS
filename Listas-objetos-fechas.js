//Listas, Objetos y fechas en JS

//Listas, array o arreglo
const lista = [1,"Hola"];
const lista2 = new Array(2, "Hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento";

console.log(lista);
console.log(lista2);
console.log(lista3);


//Objetos
const movil = {
    altura:10,
    anchura:5,
    marca:"Xiaomi",
    isWhite: true,
    contactos: ["Gorka","Martin"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 128
    }
};
movil.anyo = 2019; //Agrego un atributo
movil.marca = "iphone"; //Cambio un atributo existente


console.log(movil.tarjeta.marca);
console.log(movil.anyo);
console.log(movil.marca);

//Fechas
//librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //utilizando milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo);