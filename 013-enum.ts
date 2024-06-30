/*
O enum é tipo um objeto que você chama.
Ele é utilizado para não ter que reescrever
a mesma linha diversas vezes.
*/

enum Description1 {
    Camisa= `Com a camisa AS, você tem tecnologia.
              Você não precisa desamassar nem 
              passar ferro.`,
    IdCamisa = 1553335541335,
    Calcado = `Nossos tenis são confeccionados em 
               couro sintetico e pode ser lavado.`,
    IdCalcado = 2224455755965,
}

let item55:{} = {
    prop1: Description1.Camisa,
    prop2: Description1.IdCamisa,
}

console.log(item55)