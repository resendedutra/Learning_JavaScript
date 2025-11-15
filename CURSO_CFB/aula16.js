// Loop For In e For Of

const objs = document.getElementsByTagName("div")
let o

for(o in objs){
  console.log(o)
}

for(o of objs){
  console.log(o)
}

let n1 = [10, 20, 30, 40, 50]

for(let i = 0; i < n1.length; i++){
  console.log(i)
}

for(let i = 0; i < n1.length; i++){
  console.log(n1[i])
}

let n

for(n in n1){
  console.log(n)
}

for(n in n1){
  console.log(n1[n])
}

for(n of n1){
  console.log(n)
}