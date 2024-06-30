/*
Para não usar any, usamos o union type
Te permite criar uma variável que pode
receber mais de um tipo de dado
*/

let id: string | number = "carro";

id = 3;

id = true; //esse tipo não é aceito aqui, então F

let id2 : string | number | boolean = true;

id2 = true;

id2 = []; //F
