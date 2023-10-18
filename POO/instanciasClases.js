//Estamos creando un objeto tipo persona, con una clase llamada persona

class Persona {
    //Variables pertenecientes a la persona (atributos)
    nombre;
    edad;
    isDeveloper;

    //constructor
    constructor(nombre, edad, isDeveloper){
        //El this hace referencia al objeto al cual pertenece
        //Referencia sus atributos
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    //Metodo/ funcion de la persona
    //Desde los metodos podemos acceder a todos los atributos a los cuales
    //pertenece el metodo
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);
    }
}

//Manera de crear e instanciar el objeto de la clase que hemos creado
const nuevaPersona = new Persona('Daniela', 28, false);
console.log(nuevaPersona);
nuevaPersona.saludo();

let numero = 60;
console.log(typeof numero);

//instanceof -> similar a typeof pero para clases
console.log(nuevaPersona instanceof Persona);
//Me indica verdadero si el objeto nuevaPersona es una instancia de la clase
//persona
