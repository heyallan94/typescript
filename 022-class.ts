/* Usamos class igualmente a JS, só que mais tipado... */

class User{                                //class User{
    name;                                  //    constructor(name, age, city){
    age;                                   //    this.name = name;
    city;                                  //    this.age = age;
    constructor(                           //    this.city = city;
        name: string,                      //}} Seria assim que escreveríamos em JS
        age: number, 
        city:string
    ){}
}

let id31051994 = new User('Allan',25,'caruaru')