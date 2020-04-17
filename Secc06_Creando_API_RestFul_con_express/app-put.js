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

//manejo de solicitudes http get /Esto es un mock/ */:
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
    res.send(users);
});

app.get('/api/users/:id', (req, res) => {
    let user = existUser(req.params.id);
    if (!user) res.status(404).send('El usuario no fue encontrado');
    res.send(user);
    //res.send(req.params.id);
});

//Funcion para manerjar post
app.post('/api/users', (req, res) => {

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


//Capitulo 62: Manejo Solicitudes HTTP PUT
//*Se requiere el ir para saber cual es el parametro que vamos a modificar
app.put('/api/users/:id', (req, res) => {
    //Encontrar si existe el objeto usuario que voy a modificar
    //let user = users.find(u => u.id === parseInt(req.params.id));
    let user = existUser(req.params.id);
    if (!user){
       res.status(404).send('El usuario no fue encontrado');
       return;
    };
    //validar si el dato que esta viniendo es un dato correcto
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    const { error, value } = validUser(req.body.name);
    if (error) {
        const message = error.details[0].message;
        res.status(400).send(message);
        return;
    };
    user.name = value.name;
    res.send(user)
});

const port = process.env.PORT || 3000;
//indicar sobre que puerto va a escuchar la peticion que se realizara
//con esto el servidor web se esta ejecutando, y escucha a traves del puerto 5000 de ejemplo
app.listen(port, () => {
    console.log(`escuchando desde el puerto ${port}...`);
});


//Secc6Cap63: Funciones de validacion
function existUser(id){
    return(users.find(u => u.id === parseInt(id)));
};

function validUser(nam){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return(schema.validate({ name: nam }));
};