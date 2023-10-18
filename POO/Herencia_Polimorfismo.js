//Herencia
class Persona {  // _ significa privado
    _nombre;
    _apellido;
    _edad;
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    saludar(){
        console.log(`Hola soy ${this._nombre} ${this._apellido} y tengo ${this._edad} años`);
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, edad, lenguaje){
        super(nombre, apellido, edad);
        this.lenguaje = lenguaje;
    }

    saludar(){ //override
        super.saludar();
        console.log(`soy desarrollador de ${this.lenguaje}`);
    }
}

const nuevoDev = new Desarrollador('Alejo', 'Oliveros', 26, "Java");
nuevoDev.saludar();

//Polimorfismo poli muchos y morfismo formas; varias formas


