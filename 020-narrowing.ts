/*
Checagem de tipos
Apenas um tratamento de dados
*/

function isWhat(data:number|string){
    if(typeof data === "number"){
        console.log(`${data} é um número`);
        return;
    };
    console.log(`Você digitou:"${data}"`);
}

