// Tipos de variáveis

"user strict"

var nome1 = "Carlos"        // pode ser alterada e utilizada em qualquer parte do código (variável global)
const curso = "JavaScript"  // não pode ser alterada, mas utilizada em qualquer parte do código

if (true){
  let nome2 = "Felipe"      // pode ser alterada, mas utilizada somente no nível em que foi criada (variável por bloco)
  console.log(nome2)        // essa impressão pode ocorre somente dentro do bloco if
}

console.log(nome1)
console.log(nome2)          // aqui gera um erro para impressão
console.log(curso)