const ul = document.querySelector('.itens')
console.log(ul)

// Remover um elemento
// ul.remove();
// ul.lastElementChild.remove() // remove o último item da lista ul

console.log(ul.firstElementChild.textContent = 'olá'); // altera o conteúdo do primeiro item da lista ul
console.log(ul.firstElementChild.textContent); // mostra o conteúdo do primeiro item da lista ul
console.log(ul.children); // mostra os itens da coleção ul completa
console.log(ul.children[2]); // mostra o item de índice 2 da coleção ul
console.log(ul.children[2].textContent = 'oi'); // mostra o item de índice 2 da coleção ul e altera seu conteúdo
console.log(ul.children[3].innerText = 'oie'); // mostra o item de índice 3 da coleção ul e altera seu conteúdo
console.log(ul.children[4].innerHTML = '<h1>Opa</h1>'); // mostra o item de índice 4 da coleção ul e altera sua propriedade HTML

// alterar o estilo do item de forma dinâmica
const botao = document.querySelector('.botao');
console.log(botao);
botao.style.background = 'yellow';
