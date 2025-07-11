let nome = 'Carlos';
let sobrenome = 'Dutra';
let idade = 50;

let mensagem1 = 'Meu nome é ' + nome + ' ' + sobrenome + ' e tenho ' + idade + ' anos de idade!';
let mensagem2 = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos de idade!`;
console.log('Meu nome é', nome, sobrenome, 'e tenho', idade, 'anos de idade!');
console.log(mensagem1);
console.log(mensagem2);

const s = 'Olá Mundo!';
console.log(s.length); // length é uma propriedade/atributo que conta o nº de caracteres
console.log(s.toUpperCase()); //.toUpperCase é uma função/método deixa tudo maiúsculo
console.log(s.toLowerCase()); //.toLowerCase é uma função/método deixa tudo minúsculo
console.log(s.substring(4, 10)); //.substring é uma função/método captura parte de um texto
console.log(s.split(' '));
console.log(s.split(''))