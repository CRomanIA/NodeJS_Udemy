//crear elemento con la dependencia
const express = require('express');
const Joi = require('@hapi/joi');
//para instanciar (que puede recibir parametro) el elemento
const app = express();
//indicar a la app cuales van a ser los metodos que puedo implementar y su ruta
/*
app.get(); //peticion
app.post(); //envio de datos desde el servidor
app.put(); //actualizacion
app.delete(); //eliminacion
*/
app.use(express.json());

//manejo de solicitudes http get:
const users = [
    { id: 1, name: 'Felipe' },
    { id: 2, name: 'Pablo' },
    { id: 3, name: 'Cony' }
];
//promesa: request, response:
app.get('/', (req, res) => {
    res.send('hola mundo desde express.');
});

app.get('/api/users', (req, res) => {
    res.send(['felipe', 'luis', 'cony']);
});

app.get('/api/users/:id', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) res.status(404).send('El usuario no fue encontrado');
    res.send(user);
    //res.send(req.params.id);
});

//Funcion para manerjar post
app.post('/api/usuarios', (req, res) => {

    //Capitulo 61: Validacion modulo joi
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    const { error, value } = schema.validate({ name: req.body.name });
    if (!error) {
        const user = {
            id: users.length + 1,
            name: value.name
        };
        users.push(user);
        res.send(user);
    } else {
        const message = error.details[0].message;
        res.status(400).send(message);
    };



    //TODO:validacion de datos de entrada Secc60
    //validacion: si tiene un valor menor o igual a 2, debe ingresar un nombre valido
    /*
     if(!req.body.nombre || req.body.nombre.length <= 2){
         //mandar respuesta bad request 400
         res.status(400).send('Debe ingresar un nombre, que tenga minimo 3 letras');
         //Para terminar el metodo cuando detecta el comportamiento
         return;
     }
 
     const usuario = {
         id: usuarios.length +1,
         nombre: req.body.nombre
     };
     usuarios.push(usuario);
     res.send(usuario);*/
});

const port = process.env.PORT || 3000;
//indicar sobre que puerto va a escuchar la peticion que se realizara
//con esto el servidor web se esta ejecutando, y escucha a traves del puerto 5000 de ejemplo
app.listen(port, () => {
    console.log(`escuchando desde el puerto ${port}...`);
});