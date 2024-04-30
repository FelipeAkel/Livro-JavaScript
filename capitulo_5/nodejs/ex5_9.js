/*
    B) Elaborar um programa que leia o nome de um produto e o número de etiquetas a serem impressas desse produto.
    Exiba as etiquetas com o nome do produto, com no máximo 2 etiquetas por linha.
*/
const prompt = require("prompt-sync")();
const produto = prompt("Nome do produto: ");
const numEtiqueta = Number(prompt("Número de Etiquetas: "));

for(let x = 1; x <= numEtiqueta / 2; x++){
    console.log(`${produto.padEnd(30)} ${produto}`)
}

// Imprimindo a última etiqueta quando for número impar
if(numEtiqueta % 2 == 1){
    console.log(produto);
}

// let resultado = '';
// let contador = 0;

// for(let x = 0; x < numEtiqueta; x++){
//     if(contador < 2){
//         resultado = produto + '   ' + resultado; 
//         contador = contador + 1;
//         console.log(contador);
//         // console.log(resultado)
//     } else {
//         console.log('vazio?' + resultado);
//         contador = 0;
//         resultado = '';
//     }

//     console.log('FORA' + resultado);
//     // console.log(contador);
//     // console.log(resultado);
// }