/*
    C) Elaborar um programa para uma loja que leia o valor de uma conta e o número de vezes que um cliente deseja parcelar esse valor (em boletos ou carnê).
    Para facilitar o troco, o lojista deseja que as parcelas iniciais não tenham centavos, ou seja, centavos apenas na última parcela.
    Informe como resposta o valor de cada parcela, considerando essa situação.
*/

const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor da Conta: "));
const parcelas = Number(prompt("Número de Parcelas: "));

for(let x = 1; x <= (parcelas - 1); x++){
    let valorParcela = Math.floor(valor / parcelas);
    console.log(`Valor da Parcela ${x} é de R$: ${valorParcela.toFixed(2)}`);
}
const ultimaParcela = Math.floor(valor / parcelas) + (valor % parcelas);
console.log(`Valor da Parcela ${parcelas} é de R$: ${ultimaParcela.toFixed(2)}`);
