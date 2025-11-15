// Funções com Return

function canal(){
  return "CFB Cusros"
}

console.log(canal())

function multiplicacao(){
  let n1 = 10
  let n2 = 2
  let r1 = n1 * n2
  if(r1 % 2 == 0){
    return "Par"
  }else{
    return "Impar"
  }
  // return r1
}

console.log(multiplicacao())
let n3 = multiplicacao()
console.log(n3)