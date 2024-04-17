const prompt = require("prompt-sync")();
const veiculo = prompt("Veículo: ");
const preco = Number(prompt("Preço R$: "));
const entrada = preco * 0.50;
const parcelas = entrada / 12;

console.log(`Promoçao: ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$: ${parcelas.toFixed(2)}`);