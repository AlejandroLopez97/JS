/**Trabajando con fechas  */
const fecha = new Date()

console.log(fecha)

//otra forma de inicializar fechas
//Los meses inicializan en 0 (0-Enero y 11-Diciembre)

const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha2)

const fecha3 = new Date(0) //milisegundos positivos y negativos
console.log(fecha3)

//a traves de strings 
const fecha4 = new Date('April 16, 1997 20:36:15')
console.log(fecha4)

//comparar dos fechas

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)

console.log(fecha < fecha2)
console.log(fecha2 === fecha5)//ERROR NO se pueden comparar de esta manera

//forma de comparar fechas, con la funcion getTime()
console.log(fecha2.getTime() === fecha5.getTime());

/**Obtener el día, el mes y el año de una fecha */

//dia getDate()
console.log(fecha2.getDate())

//mes getMonth (0-Enero 11-Diciembre)
console.log(fecha2.getMonth()+1)

//año .getFullYear()
console.log(fecha2.getFullYear())

//mostrar fecha en un string 
console.log(fecha2);

//.toLocalDateString
console.log(fecha2.toLocaleDateString());