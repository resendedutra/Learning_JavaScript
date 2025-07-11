/* Vetores são elementos lado a lado de forma ordenada e possiu índice iniciando com zero
Os elementos podem ser strings, números, booleanos
Exemplo de um vetor/array: ['A', 10, 'oi', 1.5, true]
*/

// Criando um vetor/array
const vetor = ['A', 10, 'oi', 1.5, true];
console.log(vetor);

const numeros = [1, 2, 3, 4, 5];
const frutas = ['maças', 'laranjas', 'peras', 'uvas'];
console.log(numeros, frutas);
console.log(frutas[1]); // Mostra o elemento localizado no índice 1, que no caso é laranjas

// Adicionar um elemento a um vetor/array
frutas[4] = 'melancias';
console.log(frutas);

// Adicionar um elemento no final do vetor/array
frutas.push('limões');
console.log(frutas);

// Adicionar um elemento no iníci do vetor/array
frutas.unshift('morangos');
console.log(frutas);

// Substituir um elemento em um vetor/array
frutas[0] = 'abacates';
console.log(frutas);

// Remover o último elemento de um vetor/array
const fruta_removida_final = frutas.pop();
frutas.pop();
console.log(frutas);
console.log(fruta_removida_final);

// Remover o primeiro elemento de um vetor/array
const fruta_removida_inicial = frutas.shift();
console.log(frutas);
console.log(fruta_removida_inicial);

// Remover um elemento de um vetor/array
frutas.splice(2, 1); // Remove um elemento de índice 2
frutas.splice(2, 2); // Remove dois elemento de índice 2
console.log(frutas);

// Retornar o índice de um elemento no vetor/array
console.log(frutas.indexOf('laranjas'));

// Verificar se uma determinada constante/variável é um vetor/array
console.log(Array.isArray(frutas));
console.log(Array.isArray(10));
console.log(Array.isArray('Olá Mundo!'));