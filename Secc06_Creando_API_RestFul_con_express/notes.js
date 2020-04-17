//vamos a crear nuestra propia api rest que va a recibir y atender peticiones
//desde la aplicaciones cliente o para la aplicacion movil.

/*
Secc06_cap52:
¿Qué es un api rest ful?
es un servicio que se publica en el servidor y que se hacen tranferencia de datos entre el cliente
y el servidor de forma asincrona, pero hay ciertas operaciones que se van a hacer en el servidor
a traves del api rest

create = post
read = get
update = put
delete = delete
*/

/*
Secc06_cap53:
Introduccion e instalacion de express:
express: es un framework que trabaja gracias a node.
node: es un entorno que trabaja en tiempo de ejecucion, multiplataforma y que nos permite crear
toda clase de herramientas en el lado del servidor
api resful: sistema de apis que incluye el protocolo de http y poder servir peticiones a usuarios

para crear el proyecto en express:
-levanta el proyecto
npm init --yes
--intalar express
npm install express --save
se crea la dependencia en package.json
se crea la carpeta de node_modules con la paqueteria de express
*/

/*
Secc06_cap54:
nuestro primer web server:
dentro de la carpeta del proyecto
crear archivo app.js
ir a app.js
*/

/*
Secc06_cap55:
variables de entorno:
***a escribir...

set PORT=VALOR DEL HOST DE LA VARIABLE
*/

/*
Secc06_cap56    
parametros en las rutas:

para tomar el valor de un parametro es necesario recibir el parametro y solicitar el valor del parametro
app.get('api/usuario : id', req,res =>{
    res.send(req.params.id);
})
*/

/*
Secc06_cap57:
manejo de solicitudes HTTP GET:
que sabemos?
gestionar las rutas
enviar parametros

se verá como se gestionan las peticiones
veremos hacer un get con http:

*/

/*
Secc06_cap58:
 como manejar las peticiones post
 expres debe parsear la iformacion cuando la recibe


*/

/*
Secc06_cap61:
Validacion de datos con modulo joi

*/


/*Para hacer un nodemon en cualquier proyecto, cambiar el nombre a app.js y levantara localhost:3000 */