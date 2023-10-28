let botonElem = document.getElementById('boton-cambiar-cita');
const autorElem = document.getElementById('autor');
const citaElem = document.getElementById('cita');

function generarEnteroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}
function cambiarCita(){
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.innerText = `'${citas[indiceAleatorio].texto}'`;
    autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita);
