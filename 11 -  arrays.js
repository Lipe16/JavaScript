/*
    Arrays são elementos capazes de armazenar coleções de objetos, no JS inclusive  eles são dinâmicos(podem alterar de tamanho no decorrer de sua vida)
*/

let frutas = ['Uva', 'Morango', 'Abacate'] //este array tem 3 posições/ 3 frutas (a 0, 1 e 2)
console.log(frutas) 

console.log(frutas[1]) // contando a partir de 0, a posição 1 é a segunda posição e corresponde ao morango

frutas[3] = 'Banana';// adiciona uma nova fruta na posição 3
console.log(frutas)


frutas.pop()// remove a ultima posição
console.log(frutas)

frutas.push('Graviola')// adiciona fruta ao array
console.log(frutas)


//arrays podem ser compostos por tipos diferentes
frutas.push(1) // adiciona numero ao array de frutas(string)
frutas.push(true) // adiciona booleano

console.log(frutas)

//deletar item
delete frutas[0]
console.log(frutas)
console.log(frutas[0])