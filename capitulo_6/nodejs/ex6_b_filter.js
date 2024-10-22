/*
    B) Elaborar um programa que leia nome e idade de "n" clientes de um banco (até que seja digitado "fim" no nome).
    Após, classifique e exiba os clientes em 2 grupos:
        Preferencial (a partir de 60 anos);
        Fila Notal (até 59 anos);
    Informe a ordem de atendimento em cada grupo de acordo com a chegada dos clientes.
*/

const prompt = require("prompt-sync")();
const clientes = [];

do {
    const nome = prompt("Cliente: ");
    if(nome == 'fim'){
        break;
    }
    const idade = Number(prompt("Idade: "));
    
    clientes.push({nome, idade});

    console.log('Ok! Cliente cadastrado na fila.\n');

}while(true);

const filaPresencial = clientes.filter(clientes => clientes.idade >= 60);
const filaNormal = clientes.filter(clientes => clientes.idade < 60);

console.log('\n\nFila Preferencial');
console.log('-'.repeat(40));
for(let x = 0; x < filaPresencial.length; x++){
    console.log(`${x + 1}. ${filaPresencial[x].nome} - Idade: ${filaPresencial[x].idade}`);
}

console.log('\n\nFila Normal');
console.log('-'.repeat(40));
for(let x = 0; x < filaNormal.length; x++){
    console.log(`${x + 1}. ${filaNormal[x].nome} - Idade: ${filaNormal[x].idade}`);
}