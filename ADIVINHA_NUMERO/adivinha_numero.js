let numero_maximo = prompt("Digiete o número máximo para o computador: ")
let numero_aleatorio = Math.floor(Math.random() * numero_maximo)

while(true){
  let numero_usuario = prompt("Digite o número desejado: ")
  if(numero_usuario == numero_aleatorio){
  alert("Você acertou")
  break
  }
  if(numero_usuario < numero_aleatorio){
    alert("Você escolheu um número menor")
  }else{
    alert("Você escolheu um número maior")
  }
}

alert("Fim do jogo!!!")