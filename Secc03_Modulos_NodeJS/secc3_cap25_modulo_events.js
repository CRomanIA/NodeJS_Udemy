//Modulo de eventos
//son acciones que se van a dar ante algo que pueda presentarse en un evento determinado
//un evento es un click sobre un boton, mover el mouse, cuando hacemos scroll en la pagina, etc etc etc
//a esos eventos se le pueden programarles respuestas.

const EventEmiter = require('events');
const emitter = new EventEmiter();

//Registrar Listener
emitter.on('mensajeLogger', (arg) => {
    console.log('Listener llamado...', arg);
});
//Registrar Evento
emitter.emit('mensajeLogger', { id:1, url:'http://google.cl'});
