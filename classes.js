/*
// Função construtora
function pessoa(nome, sobrebnome, nascimento) {
    this.nome = nome;
    this.sobrebnome = sobrebnome;
    this.nascimento = new Date(nascimento);
    this.obterNomeCompleto = function() {
        return `${this.nome} ${this.sobrebnome}`;
    };
}
*/

class pessoa {
    constructor(nome, sobrebnome, nascimento) {
        this.nome = nome;
        this.sobrebnome = sobrebnome;
        this.nascimento = new Date(nascimento);
    };
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrebnome}`
    };
}

const pessoa1 = new pessoa('Carlos', 'Dutra', '7-23-74');
console.log(pessoa1);
console.log(pessoa1.obterNomeCompleto());

class cliente extends pessoa {
    constructor(nome, sobrebnome, nascimento, saldo) {
        super(nome, sobrebnome, nascimento);
        this.saldo = saldo;
    };
}

const cliente1 = new cliente('Felipe', 'Dutra', '4-26-10', 1000)
console.log(cliente1);
console.log(cliente1.nome);
console.log(cliente1.sobrebnome);
console.log(cliente1.nascimento);
console.log(cliente1.saldo);
console.log(cliente1.obterNomeCompleto());