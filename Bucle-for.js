// ciclos 

for(let i=0; i < 10; i++){
    console.log(i)
}

let lista = [1, 4, 6, 43, 76, 80, 463, 12, 45, 21600];
for (let i = 1; i < lista.length; i++){
    console.log(lista[i] * 2)
}


//for ... of 
for (let valor of lista) {
    console.log(valor)
}

//forEach

lista.forEach(valor => {
    console.log(valor)
})

//For.... in

let persona = {
    nombre: "Alejandro",
    apellido: "Lopez Oliveros",
    edad: 26,
    isEngeneer: true
}

for (let propiedad in persona){
    console.log(propiedad)
    //en el siguiente no se accede con el punto si no como un array a las propiedades
    console.log(persona[propiedad])
}