//Promesas
//

const mensaje = new Promise((resolve, reject) =>{
    setTimeout(() => {
        if(false)
            resolve('Esto se va a ejecutar despues de 4 segundos y con func. flecha')
        else
            reject('Hubo un error');
    }, 4000);

});

mensaje
    .then( msj => {
        console.log(msj);
    })
    .catch(error =>{
        console.log(error);
    })

