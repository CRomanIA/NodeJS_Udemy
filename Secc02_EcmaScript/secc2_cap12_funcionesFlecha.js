//Funciones Flecha
//Funciones ES5
const years = [2000, 2005, 2008, 2012];

//Hacer una funcion que me devuelva la diferencia entre el año actual y el año que esta en el arreglo
var edad5 = years.map(function(el){
    return 2020 - el;

})

console.log(edad5);


//funciones en ES6 de tipo de flecha
let edad6 = years.map((el) => {
    return 2020 - el;
})
//una manera mas sencilla gracias a funcion tipo flecha
let edad62 = years.map(el => 2020 - el);
console.log(edad6);
console.log(edad62);

