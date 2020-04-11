//Modulo path

/*
//parametro para saber la informacion del nombre del archivo con toda su ruta
console.log(__filename);
//parametro para saber la informacion de la ruta de los archivos
console.log(__dirname);
*/

const path = require('path');

//Metoto parse: permite retornar el elemento y poder tener en representacion de propiedades elementos que forman parte de la ruta o del archivo
const objpath = path.parse(__filename);
console.log(objpath);