/*
Quando queremos que uma função retorne algo
dizemos qual o tipo de dado.
Quando não queremos que retorne nada
Usamos void
*/

function plus(n1:number, n2:number):number{
    return n1+n2 ;
}//Aqui retorna um resultado

function plusC(n1:number, n2:number):void{
    console.log(n1 + n2);
}//Aqui não retorna, apenas imprime

