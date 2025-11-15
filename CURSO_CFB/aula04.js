// Operadores matemáticos

/*

São eles:
+ adição
- subtração
* multiplicação
/ divisão
% resto da divisão ou mod
++ ou += incremento (+=1 ou +=2....)
-- ou -= decremento (-=1 ou -=2....)
*=
/=

*/

let num1 = 0, num2 = 0

num1 = 5
num2 = 10

res1 = num1 + num2
res2 = num2 - num1
res3 = num1 * num2
res4 = num2 / num1
res5 = num2 % num1
num1 ++
num2 --

console.log("Resultado da soma: ", res1)
console.log("Resultado da subitração: ", res2)
console.log("Resultado da multiplicação: ", res3)
console.log("Resultado da divisão: ", res4)
console.log("Resultado do resto da divisão: ", res5)
console.log("Resultado do incremento: ", num1)
console.log("Resultado do decremento: ", num2)
console.log("Resultado da expressão matemática: ", (num1 + num2)*2)
console.log("Resultado da expressão matemática: ", num1 + num2*2)
console.log("Resultado da expressão matemática: ", (num1 + num2)%2)