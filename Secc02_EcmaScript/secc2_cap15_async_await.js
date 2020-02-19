//Funcion Async/Await
//Son funciones asincrona, pero con espera, en donde devuelven una promesa, debe ser devuelto con el valor de resuleto o con su valor de rechazo
//cada vez que tenga un async, tendremos un await o muchos await en la funcion, y devuelven una promesa

//const mensaje = new Promise((resolve, reject) =>{
function mensaje(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true)
                resolve('Esto se va a ejecutar despues de 3 segundos y con func. flecha')
            else
                reject('Hubo un error');
        }, 2000);
    });
}

async function llamadaAsync(){
    console.log('LLamada...')
    const resultado = await mensaje();
    return resultado;
}
llamadaAsync().then(x => console.log(x)).catch(e => console.log(e));
/* mensaje
    .then( msj => {
        console.log(msj);
    })
    .catch(error =>{
        console.log(error);
    }) */


