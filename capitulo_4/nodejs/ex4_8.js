/*
    B) Uma farmácia necessita de um programa que leia o total e uma compra.
    Exiba como resposta o nº máximo de vezes que o cliente pode parcelar essa compra e o valor e cada parcela.
    Considere as seguintes condições:
        1 - cada parcela deve ser de, no mínimo, R$: 20,00;
        2 - o número e parcelas permitio é 6; 
*/

const prompt = require("prompt-sync")();
const total = Number(prompt("Valor da Compra R$: "));
let parcelas = Math.floor(total / 20);
let totalParcela = null;

if(parcelas == 0 || parcelas == 1){
    parcelas = 1;
    totalParcela = total;
} else if (parcelas > 6){
    parcelas = 6;
    totalParcela = total / 6;
} else {
    totalParcela = total / parcelas;
}

console.log(`Pode pagar em até ${parcelas}x de R$: ${totalParcela.toFixed(2)} \n`);