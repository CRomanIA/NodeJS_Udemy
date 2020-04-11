//crear app serie fibonacci
//se crea y guardar en un archivo
//uso de nodemon, permite crear un archivo en node js y no estar cambiando de interfaces 
//cada vez que se haga un cambio en el archivo

//serie de fibonacci
//1 1 2 3 5 8 13 21 34...
const fs = require('fs');

let crearSerie = (cantidad) =>{

    return new Promise((resolve, reject) => {
            
        let fibo1 = 1;
        let fibo2 = 1; 
        let dataSerie = ''; 

        dataSerie += `${fibo1}\n`;

        for(let i=2; i<= cantidad ; i++){
            dataSerie += `${fibo2}\n`;
            fibo2 = fibo1 + fibo2;
            fibo1 = fibo2 - fibo1;
        }

        /*
        Secc04_cap31:
        instalar nodemon npm install -g nodemon
        es un paquete que facilita ver en tiempo real lo que estamos trabajando en nuestra app
        para ver version... nodemon -v
        para levantar nodemon: nodemon app.js(de ejemplo)
        si modificas los valores, el nodemon lo que hara es que al momento de guardar, 
        el automaticamente se encargará de mostrarte la modificacion en la consola...
        */

        /*
        Secc04_cap32:
        Grabar la serie en un archivo de texto con el modulo files system
        */

        fs.writeFile('fibonacci.txt', dataSerie, (err) => {
            if(err) 
                reject('Error al crear un archivo');
            else

                resolve('El archivo fue grabado con exito.');
        });
    })
}
//para exportar varios metodos...
module.exports = {
    crearSerie
}