/*
    A) A Copa do Munddo ocorre de 4 em 4 anos, deste 1930, exceto nos anos de 1942 e 1946 (Seguda Guerra Mundial).
    Construa um programa que repita a leitura de números (anos) até ser digitado 0. 
    Informe para cada ano se ele é ou não ano de Copa do Mundo.
*/  
const prompt = require("prompt-sync")();
console.log("Programa Ano de Copa do Mundo. Digite 0 para sair");
console.log("-------------------------------------------------");

do{
    let ano = Number(prompt("Ano: "));
    // console.log(ano, typeof ano);
    let verifica = (1930 - ano) % 4;
    if(ano == 0){
        break;
    } else if(ano == 1942 || ano == 1946){
        console.log("Não ocorreu a Copa do Mundo. Motivo: 1942 e 1946 (Seguda Guerra Mundial) \n");
    } else if(ano >= 1930 && verifica == 0){
        console.log(`Sim... O ano de ${ano} é de Copa do Mundo \n`);
    } else {
        console.log(`Não... O ano de ${ano} NÃO é de Copa do Mundo \n`);
    }

} while (true)
