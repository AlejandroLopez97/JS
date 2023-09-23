//Manejo de modulos con JS

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

const fact = factorial(5);
console.log(fact);

const sum = suma(12, 90);
console.log(sum);