const nome = 'Carlos';
const sobrenome = 'Dutra';
const idade = 50;
const passatempos = ['música', 'filmes'];
const enderecoRua = 'Via 14';
const enderecoCidade = 'Formosa';
const enderecoEstado = 'GO';

const pessoa = {
    nome: 'Carlos',
    sobrenome: 'Dutra',
    idade: 50,
    passatempos: ['música','filmes'],

    // A parte de endereço poderia ser assim
    enderecoRua: 'Via 14',
    enderecoCidade: 'Formosa',
    enderecoEstado: 'GO',

    //ou assim
    endereco: {
        rua: 'Via 14',
        cidade: 'Formosa',
        estado: 'GO',
    }
};

// Acessar um objeto e suas propriedades
console.log(pessoa.nome, pessoa.passatempos);
console.log(pessoa.nome,'gosta de', pessoa.passatempos[1]); // O nº [1] é o índice do array passatempos
console.log(pessoa.endereco)
console.log(pessoa.endereco.rua)

// Adicionar nova propriedade a um objeto
pessoa.email = 'teste@teste.com'
console.log(pessoa)

const tarefas = [
    {
        id: 1,
        texto: 'Estudar javascript',
        completo: true,
    },
    {
        id: 2,
        texto: 'Estudar html5',
        completo: false,
    },
    {
        id: 3,
        texto: 'Estudar css3',
        completo: false,
    },
];

// Acessar a propriedade de um elemento do array tarefas
console.log(tarefas[1].texto) // O nº [1] é o índice da propriedade do objeto para pegar o texto 'Estudar html5'

// Formatar um objeto em formato JSON
console.log(JSON.stringify(pessoa));
console.log(JSON.stringify(tarefas));
