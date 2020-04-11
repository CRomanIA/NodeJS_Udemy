//Capitulo 19: Modulo

var url = 'http://cromano.io/datos';

function dato(mensaje){
    //Envie un http request
    console.log(mensaje)
}
/*
//OJO: Estas exportaciones se vuelven automaticamente publicas
//para exportar el dato
module.exports.log = dato;
//para exportar el url
module.exports.url = url;

console.log(module);
*/
module.exports =dato;
//Finaliza en el capitulo 20/21
