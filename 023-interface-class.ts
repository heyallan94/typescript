/*
Novamente, para utilizar uma padronização em partes do código

Lembre que interface é o PADRÃO que é aceito naquele objeto.

Ao usarmos class, estamos querendo criar um objeto no molde de interface
*/

interface Person{ //O PADRÃO DA CLASS SEGUIRÁ ESSE
    name: string;
    age: number;
    greet():void;
};

class Employee implements Person{//A Class Employee vai usar o molde de Person
    name: string;
    age: number;
    constructor(name:string, age:number){//Lembre que para puxar o parametro para propriedade
        this.name = name;                //temos que dizer pra onde vai a propriedade usando this
        this.age = age;
    };
    greet(): void { 
        console.log(`Hello, this is ${this.name}, I'm ${this.age} years old.`)
    }
}

const id1010 = new Employee('Allan' , 25)