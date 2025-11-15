// Funções Parametrizadas

function nome(p1){
  console.log(p1)
}

soma("Carlos")

function soma(n1, n2){
  let r1 = n1 + n2
  console.log(r1)
}

soma(5, 2)

function soma(n1=5, n2=10){
  let r1 = n1 + n2
  console.log(r1)
}

soma()

function soma(n1=10, n2=10){
  let r2 = n1 + n2
  return r2
}

console.log(soma())
console.log(soma(30, 20))

let resultado_final = soma()
console.log(resultado_final)