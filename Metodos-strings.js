//Metodos de cadenas de texto parte 2

let input = "Aries";
let db = "aries";


//toLowerCase() - toUpperCase()
/**
 * Aqui la condicion es verdadero por que realizamos un manejo a las mayusculas
 * y minusculas
 */
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(db.toUpperCase());
console.log(db.toLowerCase());


// Formas de concatenar dos cadenas de caracteres 
let srt_1 = "Primera cadena de caracteres";
let str_2 = "Segunda cadena de caracteres";

 console.log(srt_1.concat(" ", str_2));

 /**
  * tener en cuenta que el operador + es muy utilizado con los números
  * debido a que por concatenar no realiza una suma aritmetica
  */
 console.log(srt_1 + " " + str_2);

 console.log(`${srt_1} ${str_2}`);

 //Eliminar espacios al inicio y al final
  let str_3 = '     Cadena de caracteres con espacios     ';
  console.log(str_3.length);
  //trim() para eliminar los espacios al final
  console.log(str_3.trim().length);
  //trimStart() para eliminar los espacios al inicio
  console.log(str_3.trimStart().length);

  //obtener el caracter que hay en cierta posicion
  let str_4 = "Ejemplo para obtener el caracter";
  console.log(str_4.charAt(4));
  console.log(str_4[4]);

  //obtener la posicion de una palabra, dentro de una cadena de caracteres
  let str_5 = "Grita el pueblo poderoso, grita el dim el poderoso del pueblo";
  console.log(str_5.indexOf("pueblo"));
  console.log(str_5.charAt(9));
  console.log(str_5.lastIndexOf("pueblo"));
  console.log(str_5.charAt(55));