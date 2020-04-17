//crear elemento con la dependencia
const express = require('express');
//para instanciar (que puede recibir parametro) el elemento
const app = express();
//indicar a la app cuales van a ser los metodos que puedo implementar y su ruta
/*
app.get(); //peticion
app.post(); //envio de datos desde el servidor
app.put(); //actualizacion
app.delete(); //eliminacion
*/

//manejo de solicitudes http get:
const usuarios = [
    { id: 1, nombre: 'Felipe' },
    { id: 2, nombre: 'Pablo' },
    { id: 3, nombre: 'Cony' }
];

//promesa: request, response:
app.get('/', (req, res) => {
    res.send('hola mundo desde express.');
});

app.get('/api/usuarios', (req, res) => {
    res.send(['felipe', 'luis', 'cony']);
});

app.get('/api/usuarios/:id', (req, res) => {
    let usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) res.status(404).send('El usuario no fue encontrado');
    res.send(usuario);
    //res.send(req.params.id);
});

//variable de entorno...
const port = process.env.PORT || 3000;
//indicar sobre que puerto va a escuchar la peticion que se realizara
//con esto el servidor web se esta ejecutando, y escucha a traves del puerto 5000 de ejemplo
app.listen(port, () => {
    console.log(`escuchando desde el puerto ${port}...`);
});

//Finaliza Capitulo 57.
