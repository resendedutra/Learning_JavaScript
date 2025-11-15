// Diferença em Pré Incremento e Pós Incremento (os exemplos abaxo podem ser usados para derecmento)

let n1 = 10

n1 ++   // Incrementa de 1 em 1 (pós incremento)
console.log(n1)

n1 = 10
console.log(n1 ++) // Incrementa de 1 em 1 (pós incremento, 1º imprimi o n1 e depois incrementa o n1)
console.log(n1)

n1 = 10
console.log(++ n1) // Incrementa de 1 em 1 (pré incremento, 1º incrementa o n1 e depois imprimi o n1)

n1 = 10
n2 = 20
n1 +=10
console.log(n1)
console.log(n1 + n2)        // soma aritmética
console.log(n1 + "" + n2)   // concatenação

