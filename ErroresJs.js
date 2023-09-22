//Errores manejo
const miFuncion = val => {
    if(typeof val === "number"){
        return 2*val;
    }
    //return false;
    throw new Error("El valor debe ser de tipo númerico");
}

//const elDoble = miFuncion("ala");
//console.log(elDoble);
const numero = 8;

try{
    //Codigo que puede fallar
    const doble = miFuncion(numera)
    console.log(doble);
    console.log("Está ejecutandose de manera correcta");

}catch(e){
    //En caso de fallar , ejecuta las siguientes lineas
    console.error("ERROR!");
    console.error(e);
}finally {
    console.log("Se ejecuta si existe error y si no existe");
}

//Errores mas comunes
//InternalError, SyntaxError, TypeError, RangeError y ReferenceError