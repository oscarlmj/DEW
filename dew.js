//Busca el patron tal cual esta
let patron= /hola/i;
let frase="'Hola guapo'";


console.log("String.match() busca dentro de "+frase+" el patron "+patron);

if(frase.match(patron))
{
    console.log("Coincide");
}
else
console.log("No coincide");

console.log("\nAhora hace lo mismo pero con las expresiones regulares");
let re = new RegExp(/hola/i);
console.log(re.test('Hola'));

console.log("\nReemplaza en la String el valor buscado");
console.log("Antes de cambiar");
console.log(frase);

console.log("Despues de cambiar");
console.log(frase.replace(patron,"Aloo"));

console.log("\Buscar dentro de una String, en caso de existir el patron, devuelve la posicion donde lo encuentra, en caso contrario -1");
console.log(frase.search(patron));