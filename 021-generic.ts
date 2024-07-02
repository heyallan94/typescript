/**
 * Quando o código precisa que você aceite um
 * array genérico ou seja , não sabe os tipos 
 * de dados que vão chegar.
 * Usamos o generic.
 * NÃO USE ANY 
 */

function showArray<T>(arr: T[]){
    arr.forEach((item)=>{
        console.log(item);
    });
}

let arr1:number[]= [1, 2, 3, 4, 5, 6, 7];
let arr2:(number|boolean)[]= [1,2,6,true,false,4];