/*
    O tipo booleano compreende 2 valores, verdadeiro ou false porém em JS alguns valores ou a falta deles podem também resultar em verdadeiro ou falso
*/

console.log(true) // verdadeiro
console.log(false) //falso


// O operador de negação "!" muda um valor de verdadeiro para falso ou vice versa
console.log(!true)
console.log(!false)

// Usando o operador de negação para forçar um retorno de verdadeiro ou falso, nota-se que  em JS uma string ou um número porém retornar true ou false
console.log(!!"teste") //operador de negação 2 vezes, altera o valor 2 vezes fazendo assim que o resultado seja o primeiro valor
console.log(!!"")

// no teste acima nota-se que uma string com valor retorna true e uma string sem valor retorna false.

//números também podem fornecer valores booleanos:
console.log(!!0)
console.log(!!1)
console.log(!!-1)