//Funciones CallBack
//es parte de la programacion funcional y la funcion principal es que nos permite poder recibir como parametro, otra funcion u otro metodo

function Mensaje(callback){
    console.log('Mensaje Antes de la llamada callback');
    callback();
}

function Saludo(){
    console.log('saludo despues de la llamada callback');
}
Mensaje(Saludo);

//Otra manera de utilizar el callback
function Sumar(num1, num2, callback){
    let resultado = num1 + num2;
    callback(resultado);
}

function Resultado(res){
    console.log(res);
}
Sumar(5,8, Resultado);

//setTimeout
setTimeout(function(){
    console.log('Esto se va a ejecutar despues de 4 segundos');

}, 4000);

//metodo mas facil de hacerlo, gracias a la funcion flecha
setTimeout(() => console.log('Esto se va a ejecutar despues de 3 segundos y con func. flecha'), 3000);

