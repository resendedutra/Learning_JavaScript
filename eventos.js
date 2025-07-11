// Evento click
const titulo = document.getElementById('titulo');
function imprimirTitulo() {
    console.log(titulo);
}
titulo.addEventListener('click', imprimirTitulo); // adicionar evento detector

// Alterar a cor de fundo do formulário quando o botão for clicado
const botao = document.querySelector('.botao'); // selecionando o botão através da sua classe
function botaoClicado(eventoClick) {
    eventoClick.preventDefault();
    console.log(botao);
    console.log(eventoClick.target);
    console.log(eventoClick.target.className);
    //const formulario = document.getElementById('meu_formulario');
    //formulario.style.background = 'blue';
    document.getElementById('meu_formulario').style.background = 'blue';
    document.querySelector('body').style.background = 'green'
    document.getElementsByClassName('itens')[0].lastElementChild.innerHTML = '<h1>Alterado</h1>';
}
botao.addEventListener('click', botaoClicado);

const inputNome = document.querySelector('#nome');
inputNome.addEventListener('input', (eventInput) => {
    console.log(eventInput);
    console.log(inputNome.value);
    document.querySelector('.container').append(inputNome.value);
})