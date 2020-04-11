//Modulo filesystem

const fs = require('fs');
/*
const archivos = fs.readdirSync('./');
console.log(archivos);
*/
fs.readdir('./', function(err, files){
    if(err) console.log('Error ', err);
    else console.log('Resultado ', files);
});