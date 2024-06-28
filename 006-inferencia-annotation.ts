/*
Note que o Typescript é usado para tipar, porém quando você define uma variável
sem dizer o tipo, ele funciona normalmente
*/

let abc = 3;
let abcabc = abc + abc;
console.log(abcabc);

/*
O typescript sabe que a variável "abc" é um number, por esse motivo não há erros
Porém, ele não vai deixar mudar o tipo de dado de "abc".
*/

abc = 4
abc = "hello"

