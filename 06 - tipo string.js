/*
    É um tipo de dado que armazena valores textuais e alfanúmericos
*/

//exemplo:
"este texto é uma string"

//Strings porém ser montadas de três formas:
"com aspas duplas"
'com aspas simples'
let teste = `com acento grave` 

// O tipo string tem várias funções disponiveis 

console.log("Céu ".concat("azul") ) // concatenação
console.log("Céu azul".replace("u", "")) // substitui o caracter u por vazio
console.log("Céu azul".length) // mostra quantos caracteres compem a string
console.log("Céu azul".split(" ")) // transforma string em array, dividindo ela com referencia de onde tem um espaço em branco