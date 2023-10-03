//Funcion generadora de IDs

function* generaId(){
    let id = 0;
    while (true){
        id++;
        if(id > 10) {
            return id
        }
        yield id;//especie de return, pero en lugar de salirse, espera hasta volver ser llamado
    }
}

const gen = generaId();
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


