const x = 30;
const y = 10;

// Exemplo 1
if (x == y) {
    console.log('x é igual a y');
}
else {
    console.log('x é diferente de y');
}

// Exemplo 2
if (x < y) {
    console.log('x é menor que y');
}
else if (x > y) {
    console.log('x é maior que y');
}
else {
    console.log('x é igual a y');
}

// Exemplo 3
if (x < y || x > y) {
    console.log('x é diferente y');
}
else {
    console.log('x é igual a y');
}


//const cor = 'amarelo'
const cor = 'azul'

switch (cor) {
    case 'vermelho':
        console.log('A cor e vermelho');
        break;
    case 'verde':
        console.log('A cor é verde');
        break;
    case 'azul':
        console.log('A cor é azul');
        break;
    default:
        console.log('A cor não é vermelho, nem verde nem auzl')
}


// Simulando a contegem para uma bomba
const contador = 5;

switch (contador) {
    case 5:
        console.log('5');
    case 4:
        console.log('4');
    case 3:
        console.log('3');
    case 2:
        console.log('2');
    case 1:
        console.log('1');
    default:
        console.log('Boooommmmmm!!!!!!')
}


const sexo = 'M';
switch (sexo) {
    case 'M':
    case 'm':
        console.log('Masculino');
        break;
    case 'F':
    case 'f':
        console.log('Feminino')
    default:
        console.log('Definir o sexo');
}


let numero1;
if (cor == 'vermelho') {
    numero1 = 10;
} else {
    numero1 = 20
}
console.log(numero1);

// Abaixo segue forma diferente de se fazer o código acima do let = numero
// numero recebe cor igual a vermelho que é será 10, senão será 20
let numero2 = cor == 'vermelho' ? 10 : 20;
console.log(numero2)
