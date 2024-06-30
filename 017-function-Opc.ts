/*
Quando o argumento é opcional, usamos dessa maneira
*/

function saudacao(name:string, nomeclatura?:string):void{ //Lembre que ele não retorna NADA
    if(nomeclatura){                                      //ele está imprimindo, Retornou nada? VOID
        console.log(`Hello ${nomeclatura} ${name}.`);
        return;
    };
    console.log(`Olá ${name}.`);
}

saudacao('Allan', 'Sir');