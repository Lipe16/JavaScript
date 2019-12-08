/*
    Variavel é um elemento capaz de reter um valore, seu valor pode ou não ser alterado no decorrer de sua vida.
*/

//declarando variável
var x = "Filipe"


// outra maneira de declarar variável
let y = "Ferreira"
y = "Ferreira Ramos" //alterando valor
console.log(y)

//váriaveis com valores do tipo number
let a = 5
let b = 2
console.log(a*b)

/*
    diferenças entre let e var:
    - let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword var,
     que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.

    -let é uma maneira mais nova de declaração de variável, consegue barrar erros como declarar a mesma váriavel duas vezes 

*/

var x = "teste"// esta váriavel x já foi declarada antes porém como foi usado o var, não ocorrerá erro algum
