function suma(a, b){
    return a + b;
}

function multiplica(a, b){
    return a * b;
}

function eleva(a, b){
    return a ** b;
}

function factorial (a){
    let factorial = 1;
    for(let i = 2; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

//Exportar las funciones de la forma CommonJS
module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}
