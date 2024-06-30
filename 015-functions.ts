/**
 * Funções PRECISAM ser tipadas * 
 */

function sum(a: number, b: number) {
    return a + b;
}

sum(3 , 4);

//Isso aqui é importante, note que podemos pedir
//o tipo de dado que entra nos parametros
//e também o tipo de dado que ESPERAMOS da função
function sayMyName(name: string):string{
    return `Hello ${name}`
}

console.log(sayMyName('Allan'))

