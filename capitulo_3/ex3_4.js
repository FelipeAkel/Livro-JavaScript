const prompt = require("prompt-sync")();
const peso = Number(prompt("Peso da ração em kilos (kg): "));
const consumo = Number(prompt("Consumo diário do gatinho em gramas (gr): "));
const dias = Math.floor((peso * 1000) / consumo);
const sobra = (peso * 1000) % consumo;

console.log(`Duração ${dias} dias`);
console.log(`Sobra ${sobra} (gr)`);