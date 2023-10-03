 /**
  * ordenamiento de listas 
  * sort modifica el array
  * .sort()
  */

 const arrayNumeros = [2, 15, 14, 24, 58, 87, 3, 65, 10]
 console.log(arrayNumeros)

 //a representa el elemento anterior y b representa el elemento siguiente
 arrayNumeros.sort((a, b) => {
    if(a < b) return -1
    else if (a > b) return +1
    else return 0 //que a === b
 })

 console.log(arrayNumeros)

 //Ordenar unicamente arrays numericos

 const arrayN = [4, 58, 79, 8, 97, 23, 46, 51, 75]
 arrayN.sort((a, b) => a - b) // de menor a mayor b-a de mayor a menor
 console.log(arrayN);

 //En arrays de objetos, ordenar de edad menor a mayor
 //ordenamiento de objetos con sort, tomando como base la edad de las personas
 const personas = [
    {nombre: 'Daniela', edad: 28},
    {nombre: 'ALejandro', edad: 26},
    {nombre: 'Alaska', edad: 4},
    {nombre: 'Juan', edad: 2},
    {nombre: 'Samuel', edad: 1},
    {nombre: 'Fredy', edad: 28},
    {nombre: 'Jairo', edad: 32}
]

// personas.sort((a, b) => {
//     if(a.edad < b.edad) return -1
//     else if(a.edad > b.edad) return +1
//     else return 0
// })
personas.sort((a, b) => a.edad - b.edad) //manera corta de ordenar
console.log(personas);