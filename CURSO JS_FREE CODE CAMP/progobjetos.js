const nome = 'Carlos';
const sobrebnome = 'Dutra';
const nascimento = '23/07/1974';

// Criando objeto pessoaA
const pessoaA = {
    nome: 'Carlos',
    sobrenome: 'Dutra',
    nascimento: new Date('7-23-74'),
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`; // o this reperesenta o próprio objeto
    },
    obterAnoNascimento() {
        return `${this.nascimento.getFullYear()}`;
    },
}

// Criando objeto pessoaB
const pessoaB = {
    nome: 'Felipe',
    sobrenome: 'Dutra',
    nascimento: new Date('4-26-10'),
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`; // o this reperesenta o próprio objeto
    },
    obterAnoNascimento() {
        return `${this.nascimento.getFullYear()}`;
    },
}

/*

console.log(pessoaA.nome);
console.log(pessoaA.sobrenome);
console.log(pessoaA.nascimento);
console.log(pessoaA.nascimento.getFullYear()); // get.FullYer retorna o ano completo da data
console.log(pessoaA.obterNomeCompleto());
console.log(pessoaA.obterAnoNascimento());

console.log(pessoaB.nome);
console.log(pessoaB.sobrenome);
console.log(pessoaB.nascimento);
console.log(pessoaB.nascimento.getFullYear()); // get.FullYer retorna o ano completo da data
console.log(pessoaB.obterNomeCompleto());
console.log(pessoaB.obterAnoNascimento());

*/

// Função construtora
function pessoa(nome, sobrebnome, nascimento) {
    this.nome = nome;
    this.sobrebnome = sobrebnome;
    this.nascimento = new Date(nascimento);
    this.amigos = [];
    this.obterAnoNascimento = function() {
        return this.nascimento.getFullYear();
    };
    this.adicionarAmigos = function(amigo) {
        if (!this.amigos.includes(amigo)) {
            this.amigos.push(amigo);
            amigo.amigos.push(this);
        }
    };
    this.selecionarAmigos = function() {
        return this.amigos.map(function (amigo) {
            return amigo.obterNomeCompleto();
        })
    };
}

// Adiconar um novo método à função pessoa(), caso a fucnção construra acima tenha sido escrita por outra pessoa
pessoa.prototype.obterNomeCompleto = function() {
    return `${this.nome} ${this.sobrebnome}`;
}

// Criando novo objeto pessoa
const pessoa1 = new pessoa('Carolina', 'Medeiros', '8-6-83');
const pessoa2 = new pessoa('Mariana', 'Medeiros', '3-24-07');
const pessoa3 = new pessoa('Carlos', 'Dutra', '7-23-74');

console.log(pessoa1.nome, pessoa1.sobrebnome, pessoa1.nascimento);
console.log(pessoa1.obterNomeCompleto());
console.log(pessoa1.obterAnoNascimento());
console.log(`Amigos de ${pessoa1.nome}`, pessoa1.selecionarAmigos());
pessoa1.adicionarAmigos(pessoa2);
pessoa1.adicionarAmigos(pessoa3);

console.log(pessoa2.nome, pessoa2.sobrebnome, pessoa2.nascimento);
console.log(`Amigos de ${pessoa2.nome}`, pessoa2.selecionarAmigos());

console.log(pessoa3.nome, pessoa3.sobrebnome, pessoa3.nascimento);
console.log(`Amigos de ${pessoa3.nome}`, pessoa3.selecionarAmigos());
