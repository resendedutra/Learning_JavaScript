/* Funções
Uma função é um bloco de código projetado para executar uma tarefa específica.
É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.
Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que
vai contribuir para todo código.
Uma função é executada quando "algo" a chama.
*/

function mensagem1() {
    console.log('Olá Carlos');
    console.log('Olá Felipe');
    console.log('Olá Carolina');
    console.log('Olá Mariana');
}

function mensagem2() {
    console.log('Sejam bem-vindos')
}

mensagem1();
mensagem2();


let nome = 'Felipe'
let sobrenome = 'Dutra'
let idade = 15
let sexo = 'M'

function dizer_ola(nome = 'Fulano') {
    console.log('Olá ' + nome);
}

dizer_ola(nome);
dizer_ola();


function se_apresentar(nome = 'Fulano', idade = 0) {
    console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos de idade');
}

se_apresentar(nome, idade);
se_apresentar('Carolina', 42);
se_apresentar('Mariana', 18);

function criar_nome_completo(nome, sobrenome, sexo) {
    sexo = sexo.toUpperCase()
    if (sexo == 'M') {
        return `Sr. ${nome} ${sobrenome}`;
    } else if (sexo == 'F') {
        return `Sra. ${nome} ${sobrenome}`;
    } else {
        return `${nome} ${sobrenome}`;
    }
}

const nome_completo = criar_nome_completo(nome, sobrenome, sexo);
const nome_completo1 = criar_nome_completo('Mariana', 'Medeiros', 'f');
const nome_completo2 = criar_nome_completo('Carlos', 'Dutra', '');
const nome_completo3 = criar_nome_completo('Carolina', 'Medeiros', 'F');
console.log(nome_completo);
console.log(nome_completo1);
console.log(nome_completo2);
console.log(nome_completo3);


// Função seta
const dizer_oi = () => console.log('Oi');
dizer_oi();

const dizer_oi_tudo_bem = () => {
    console.log('Oi');
    console.log('Tudo bem!');
}
dizer_oi_tudo_bem();

const somar = (x, y) => {
    return x + y;
}
const resultado = somar(10, 15);
console.log(resultado);