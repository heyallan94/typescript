/*
Ao criar um código grande, fica difícil ver tanta linha
com milhares de union types sendo jogadas na cara

Por esse motivo existe o type alias

Você CRIA o cojunto de tipo de dado que quer receber
*/

type ns = number | string;

let id3 : ns = "carro";
id3 = 3;

id3 = true;//F