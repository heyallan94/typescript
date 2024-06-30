/*
Com o literal types você especifica qual o valor
uma variável DEVE aceitar e somente ISSO vai aceitar.
*/

let login: true | false;

for(let i = 0; i <10 ; i++){
    let login = true;
    if(i % 2 === 0){
        login = true;
        console.log(login);
    }else{
        login = false;
        console.log(login);
    }
}

//Nesse exemplo mudamos o valor de login para os que ele aceita
