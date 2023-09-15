/**Funciones asincronas y promesas */

function miAsinc(){
    //Funcion hace una llamada a una base de datos o tecnologia externa
    //Podemos recibir algún error mientras hace consulta o se conecta
}

//Creamos la promesa 
const miPromesa = new Promise((resolve, reject)=>{
    const i = Math.floor(Math.random() * 2)
    //Si esta todo correcto
    if (i !== 0) {
        resolve()
    }else{
        reject()
    }
})

//Consumo de una promesa
miPromesa
    .then(()=> console.log('Se ha ejecutado de forma correcta'))
    .catch(()=> console.log('Error'))
    .finally(()=> console.log('Yo me ejecuto siempre'))