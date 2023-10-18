/**Progrmación orientada a objetos
 * Paradigma de programación mas usado
 */

const persona = {
    nombre: "Alejandro",
    edad: 26,
    isDeveloper: true,
    saludo: function(){console.log('Hola');}
};

console.log(persona);
persona.saludo();

const otra_persona = {
    nombre: "Daniela",
    edad: 28,
    isDeveloper: false,
    saludo: function(){console.log('Hola');}
};

otra_persona.saludo();

//Todo lo anterior es demasiado tedioso de mantener 

//Funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre: nombre,
        edad: edad,
        isDeveloper: isDeveloper,
        saludo: function(){
            console.log("Hola");
        }
    }
};

const nuevaPersona = creaPersona("Juan", 23, true);
console.log(nuevaPersona);
nuevaPersona.saludo;

const nuevaPersona2 = creaPersona("Maria", 32, false);

//Esta forma esta bien, pero existe otra manera de realizar estas tareas mas seguras
//mas encapsuladas, mas profesional.