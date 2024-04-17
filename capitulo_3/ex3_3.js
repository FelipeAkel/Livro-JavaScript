const prompt = require("prompt-sync")();
const salario = Number(prompt("Salário R$: "));
const tempo = Number(prompt("Tempo (anos): "));
const quadrienios = Math.floor(tempo / 4);
const salarioFinal = salario + (salario * (quadrienios / 100));

// console.log(quadrienios, typeof quadrienios);
console.log(`Salário Final R$: ${salarioFinal.toFixed(2)}`);