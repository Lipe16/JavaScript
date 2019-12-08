/*
    null vs undefined
*/

//null representa uma variável sem referencia
let valor = null;
console.log(valor)

//undefined representa uma váriavel sem tipo definido e não inicializada
let valor2;
console.log(valor2)

let obj = {
    nome:"Filipe",
    valor: 10

}

console.log(obj.sobrenome) // como sobrenome não foi inicialidado com nenhum valor, seu valor é undefined

//console.log(obj.sobrenome.teste) // quando se tenta acessar uma váriavel dentro de algo que já é undefined, o resultado é um erro