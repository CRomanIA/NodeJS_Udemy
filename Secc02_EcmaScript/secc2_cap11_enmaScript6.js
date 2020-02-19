//Introduccion a EnmaScript 6

//ES5  Variables
//Var se utiliza una vez, solo al momento de declarar la variable
var nombre = "Christian";
console.log(nombre);
nombre = "Daniel";

console.log(nombre);

//ES6 o + Variables
//Const = Utilizadas para el uso de solo de lecturas (No se puede mutar)
const nombre6 = "Franscica";
//A pesar de que se le asigne otra variable, esta no va a cambiar, ya que es una constante (Siempre tendra el valor que se le asigne de forma inicial)
//nombre6 = "Ana";
console.log(nombre6);
//let  = es lo mismo que var, pero let limita su alcance al bloque, declaracion o expresion. en cambio var define la variable en una funcion sin importar el ambito del bloque
let edad = 35;
console.log(edad);
edad = 10;
console.log(edad);



