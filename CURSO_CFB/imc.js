function calcular_imc(altura, peso){
  let imc = peso / (altura * altura)
  return imc
}

let altura = prompt("Digite sua altura em metros: ")
let peso = prompt("Digite seu peso em kg: ")

console.log (calcular_imc(altura, peso))