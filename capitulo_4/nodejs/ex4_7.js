/*
    A entrada para um clube de pesca custa R$ 20,00 por pessoa e cada pessoa tem direito a levar um peixe.
    Peixes extras custam 12,00.
    Elabore um perograma que leia o número de pessoas de uma família que foram ao clube e o número de peixes obtios na pescaria.
*/

const prompt = require("prompt-sync")();
const pessoas = Number(prompt("Número de Pessoas: "));
const peixes = Number(prompt("Número de Peixes: "));
let totalPagar = null;

if(peixes <= pessoas){
    totalPagar = (pessoas * 20);
} else {
    totalPagar = (pessoas * 20) + (( peixes - pessoas) * 12);
}

console.log(`Total a Pagar R$: ${totalPagar.toFixed(2)}`);