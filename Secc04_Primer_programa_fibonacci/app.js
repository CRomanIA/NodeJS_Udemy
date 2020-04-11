 /*
Secc04_cap33:
Separar el codigo
*/

/*
Secc04_cap34:
recibir un parametro para mi serie
*/

const serie = require('./serie');
//let cantidad = 10;

let argv = process.argv;
let valor = argv[2].split('=')[1];
//console.log(valor);
let cantidad = valor

serie.crearSerie(cantidad)
    .then(mensaje => console.log(mensaje))
    .catch(mensaje => console.log(mensaje))
