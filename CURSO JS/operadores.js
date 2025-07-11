/* Principais Operadores
+ adição
- subtração
* multiplicação
/ divisão
% módulo ou resto da divisão
++ incrementar
-- decrementar */

const x = 4;
const y = 5;
const adicao = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;
const modulo = y % x // calcula o resto de uma divisão

console.log(adicao, subtracao, multiplicacao, divisao, modulo);
console.log(11 % 3) // calcula o resto da divisão de 11/3 e mostra na tela

let z = 1;
console.log(z);
z++; // funciona da mesma forma que 'z = z + 1' ou 'z += 1' ou 'z = z - 1' ou 'z -= 1' ou 'z--'
console.log(z);

let w = 6;
console.log(w);
w -= 3; // funciona da mesma forma que 'w = w - 3'
console.log(w);

let c = 10;
console.log(c);
c *= 2;
console.log(c);

let d = 10;
console.log(d);
d /= 2;
console.log(d);

let e = 9;
console.log(e);
e %= 2;
console.log(e);