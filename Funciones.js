//Que son las funciones, como se declaran y cómo se utilizan 

//Declaración de funcion 
const nom = 'Alejo'

saludar(nom)

function saludar (nombre){
    console.log(`Hola ${nombre}`)
}

let nom2 = 'Juan'

despedir(nom2)

function despedir(nombre){
    nombre = 'Diego'
    console.log(`Adios ${nombre}`);
}

let persona = { nombre: 'Juan', apellido: 'Gonzalez'}
console.log(persona);
saludarPersona(persona)
console.log(persona);
function saludarPersona(objeto){
    objeto.apellido = 'López'
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

/**-------------------------------------------------------------------------- */

function imprimirNumero(numero = 0){//Parametros por defecto
    console.log(numero);
}

imprimirNumero()

function imprimir(...parametros){
    console.log(parametros);
}

imprimir(1,2,4,9,'hola',{id:9})

function suma(...nums){
    return nums.reduce((a,b)=> a+b) //return para hacer que la funcion retorne
}

const s = suma(1, 2, 3, 4, 9, 15, 16)
console.log(s);

/**------------- */

function multiplicar(a=0, b=0){
    return a*b;
}
console.log(multiplicar(4,9));