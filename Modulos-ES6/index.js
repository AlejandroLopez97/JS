/**Manera de importar los modulos con ES6 */

import { suma, eleva, nombre } from "../Modulos-ES6/modulos/matematicas";
//import * as moduloMatematicas from './modulos/matematicas';
import getAutor, { libro } from "./modulos/literatura";

const sum = suma(4, 12);
console.log(sum);

const potencia = eleva(2, 21);
console.log(potencia);

console.log(nombre);

console.log(getAutor());
console.log(libro);