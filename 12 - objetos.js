/*
    Objetos são definidos por {}, e podem ter variáveis ou mesmo outros objetos dentro de sí
*/

//declarando objeto
let obj1 = {}

//atribuindo valores ao objeto
obj1.nome = "teste"
obj1.valor = 5
console.log(obj1)// note que mesmo não dentro criado variáveis na declaração do objeto, é possivel fazer isso de maneira dinâmica

//é possivel definir variáveis/parâmetros tendo epaço no nome
obj1["valor cm"] = 3 // não é boa prática :D
console.log(obj1)

// definindo variáveis/parâmetros na declaração do objeto
let obj2 = {
    nome: "Filipe",
    valor: 10
}

console.log(obj2)