//Modulo http
//es el modulo mas utilizado.

//http server
const http = require('http');
const server = http.createServer();

//con esto, al momento de hacer el lister en el puerto, si vamos al navegador, y ejecutamos el proceso en el puerto, el puerto enviará una respuesta del evento
server.on('connection', (puerto) =>{
    console.log('nueva conexion... ');
});

server.listen(3000);

console.log('servidor escuchando en el puerto 3000... ');