//Modulo os: Permite tener informacion del sistema operativo

const os = require('os');

var memoriaLibre = os.freemem();
var memoriaTotal = os.totalmem();

console.log(`Memoria Libre: ${memoriaLibre}`);
console.log(`Memoria Total: ${memoriaTotal}`);
