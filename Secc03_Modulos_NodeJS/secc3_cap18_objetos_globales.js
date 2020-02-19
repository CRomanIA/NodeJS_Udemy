//Objetos Globales
//el objeto console, tiene un metodo llamado log, el cual permite escribir algo, el objeto console es un objeto global
console.log('Hola mundo');
//objetos globales

//objeto para controlar temporizadores
//Node se ejecuta en un proceso dentro del sistema operativo

/* setTimeout()
clearTimeout()

setInterval()
clearInterval()
 */
//this = hace referencia al objeto global
//Para tomar un objeto global de otro archivo js
require('./datos_cap18');
global.test = 'finish';
console.log(global.test);


 
