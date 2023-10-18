class Persona {
    //Private -> #
    //Solo se puede acceder desde dentro de la clase
    #nombre;
    #edad;

    //Protected -> _
    //Solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true;
      //constructor
    constructor(nom, edad){
        //El this hace referencia al objeto al cual pertenece
        //Referencia sus atributos
        this.#nombre = nom;
        this.#edad = edad;
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años`);
    }

    getNombre(){
        return this.#nombre;
    }

    //Metodos privados
    getEdad(){
        return this.#edad;
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad;
    }
}

const persona = new Persona('Alejo', 80);
console.log(persona.nombre);
console.log(persona.edad);
persona.saludo();
persona.getNombre();
persona._isDeveloper;

//Desde el exterior de la clase si no hago la clase privada
//pueden realizarse cambios

//Getter --> metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad();
//Setter --> metodos que nos permiten asignar atributos/metodos privados o protegidod
persona.setEdad(35);