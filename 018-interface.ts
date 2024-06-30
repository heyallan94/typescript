/*
É usada para definir a estrutura de 
um objeto, especificando os nomes e 
tipos das propriedades que o 
objeto deve ter.
*/

interface Person {
    name: string;
    age: number;
    isWorking: boolean;
};

let id001: Person = {
    name: "Allan",
    age: 30,
    isWorking: false,
}

console.log(id001)