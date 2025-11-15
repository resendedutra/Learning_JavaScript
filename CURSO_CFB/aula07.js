// Operadores lógicos

/*

São eles:
&& and
|| or
! not

*/

let n1, n2, n3, n4
n1 = 10
n2 = 5
n3 = 15
n4 = 2

console.log("Resultado da operação and: ", (n1 > n2) && (n1 > n3))
console.log("Resultado da operação and: ", (n1 > n2) && (n3 > n1))
console.log("Resultado da operação and: ", (n1 > n2) || (n1 > n3))
console.log("Resultado da operação and: ", (n1 < n2) || (n1 > n3))
console.log("Resultado da operação and: ", !((n1 > n2) && (n1 > n3)))

if( (n1>n2) && (n3>n4) ){
  console.log("Verdadeiro")
}else{
  console.log("Falso")
}

if( (n1<n2) && (n3>n4) ){
  console.log("Verdadeiro")
}else{
  console.log("Falso")
}

if( (n1<n2) || (n3>n4) ){
  console.log("Verdadeiro")
}else{
  console.log("Falso")
}

if( (n1<n2) || (n3<n4) ){
  console.log("Verdadeiro")
}else{
  console.log("Falso")
}
