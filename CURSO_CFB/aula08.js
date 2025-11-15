// Operadores bitwise
// As operações ocorrem no nível binário dos números

let n1 = 10         // 00001010
let n2 = 11         // 00001011
let res1 = n1 & n2  // 00001010
console.log(res1)

let n3 = 14         // 00001110
let n4 = 11         // 00001011
let res2 = n3 & n4  // 00001010
console.log(res2)

res1 = n1 | n2      // 00001010 | 00001011 = 00001011
console.log(res1)

res1 = n1 ^ n2      // 00001010 ^ 00001011 = 00000001
console.log(res1)

res1 = n1 << 1      // 00001010 << 1 = 00010100 (desloca cada bit 1 casa para a esquerda)
console.log(res1)

res1 = n1 >> 1      // 00001010 >> 1 = 00000101 (desloca cada bit 1 casa para a direita)
console.log(res1)