/**
    Elabore um programa que leia um número que deve ser uma centena.
    Calcule e exiba a centena invertia.
    Caso o número não seja uma centena, exiba mensagem.
*/

const prompt = require("prompt-sync")();
const numero = Number(prompt("Número (centena): "));
const validacao = Math.floor(numero / 100);
let auxiliar = 0;

if (validacao == 0 || validacao >= 10){
    console.log(`Atenção! Número ${numero} não é uma centena.\n`);
    return;
}

let num1 = Math.floor(numero / 100);
auxiliar = numero - (num1 * 100);
let num2 = Math.floor(auxiliar / 10);
let num3 = auxiliar - (num2 * 10);

console.log(`Número Invertido é: ${num3}${num2}${num1} \n`);

// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(auxiliar);