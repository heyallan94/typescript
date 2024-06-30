/*
Podemos usar a interface para agir como parametros.
Ao invés de todas as vezes que criarmos uma função, termos
que colocar sempre os parametros como queremos, podemos colocar
os parametros dentro de uma interface.
*/

interface MathFunctionParams{
    n1:number, //n1 só aceita NÚMEROS
    n2:number, //n2 só aceita NÚMEROS
    2:string,  //2 só aceita STRINGS
    false?:boolean,//tem opcional da propriedade "false"? se sim, só aceita booleano
};

function soma(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
};

console.log(soma({ 
    n1:3, 
    n2: 4, 
    2:"casa", 
    false: true 
})); 



//Também podemos fazer uma variável com a estrutura da interface

let myNumers:MathFunctionParams= {
    n1: 3,
    n2: 4,
    2: "virou objeto",
    false: false,
};



