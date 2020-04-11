//Modulo http
//es el modulo mas utilizado.

//http server
const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('hola mundo');
        res.end();
    }
    if(req.url === '/api/productos'){
        res.write(JSON.stringify(['mouse','teclado','parlante']));
        res.end();
    }
});

server.listen(3000);

console.log('servidor escuchando en el puerto 3000... ');