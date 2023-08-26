//Comparar listas con every()

const array = [4, 6, 8, 12, -4, 45, -52, 7]

const resultado = array.every(valor => typeof valor === 'number')
console.log(resultado);

//comparacion de listas 
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]
console.log(ar1 === ar2);//sale false, porque no se pueden comparar asi

const compararArrays = (arr1, arr2) => {
    if(arr1.length !== arr2.length) return false
    const res = arr1.every((valor, i) => valor === arr2[i])
    return res
}

console.log(compararArrays(ar1, ar2));

const ar3 = [1, 2, 3, 6]

console.log(compararArrays(ar1, ar3));