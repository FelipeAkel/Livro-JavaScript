/*
    C) Elaborar um programa que simule saques em um caixa eletrônico de um banco.
    Ler o valor solicitado por clientes até ser digitado 0. 
    Sabendo que o caixa dispõe apenas de notas de 10, exiba após cada leitura se o saque é válido ou inválido.
    Ao final, listar os saques válidos e a soma dos saques.
    Exiba também o número de saques inválidos. 
*/

const prompt = require("prompt-sync")();
const saquesValidos = [];
const saquesInvalidos = [];

do {
    const valorSaque = Number(prompt("Valor do Saque: "));
    if(valorSaque === 0){
        break;
    }

    if(valorSaque % 10 == 0){
        saquesValidos.push(valorSaque);
        console.log('O saque é válido!\n');
    }else{
        saquesInvalidos.push(valorSaque);
        console.log('O saque é inválido, caixa só tem notas de R$: 10,00.\n');
    }
    
}while(true)

console.log('-'.repeat(80));

const somaTotal = saquesValidos.reduce((acumulado, valorAtual) => acumulado + valorAtual, 0);

console.log(`\nSoma Total dos Saques Válidos: ${somaTotal.toFixed(2)}`);
console.log('-'.repeat(40));
console.log(`Valores: ${saquesValidos.join(', ')}`);

console.log(`\n\nTotal de Saques Inválidos: ${saquesInvalidos.length}`);
console.log('-'.repeat(40));
console.log(`Valores: ${saquesInvalidos.join(', ')}`);