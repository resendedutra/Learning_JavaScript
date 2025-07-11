/*
let i = 0;

while (i <= 5) {
    console.log('miau');
    i++;
}


for (i = 0; i <= 5; i++) {
    console.log('miau');
}

for (i = 0; i <= 5; i++) {
    //console.log('O nº do contador é: ', i);
    console.log(`O nº do contator é: ${i}`);
}
*/

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

for (let i = 0; i < tarefas.length; i++) {
    //console.log(`Tarefa ${i}: ${tarefas[i].texto}`);
    console.log(`Tarefa ${i + 1}: ${tarefas[i].texto}`);
}

// Para o elemento 'tarefa' do array 'tarefas'
// A tarefa 'índice' é 'texto da tarefa'
for (let tarefa of tarefas) {
    //console.log(`Tarefa ${i}: ${tarefas[i].texto}`);
    console.log(`'A tarefa ${tarefa.id} é ${tarefa.texto}`);
}