/*
    São strings criadas com acetos graves(`)
*/

//exemplo:
let x = `Filipe Ferreira`

//este tipo de váriavel permite várias linhas e considera espaços e quebras de linha na string

x = `Filipe 
     Ferreira`
console.log(x)

//também tem a chamada interpolação que é a inserção de varíaveis e operações dentro da template
x = `operação:
        ${2+5}`
console.log(x)