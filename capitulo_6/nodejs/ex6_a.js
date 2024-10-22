/*
    A) Elaborar um programa que leia nome e nota de "n" alunos até o usuário digitar "fim" no nome.
    Após, veifiqe e exiba maior. 
    Se a m nota for superior ou igual a 7, exiba os alunos que obtiviram. Caso contrário, exiba a mensagem "Não há alunos m destaque na turma". 
*/

const prompt = require("prompt-sync")();
console.log("\nInforme os alunos. Após, digite 'Fim' no nome para sair!\n");
const alunos = [];

do{
    const nome = prompt("Aluno: ")
    if(nome == 'fim'){
        break;
    }

    const nota = Number(prompt("Nota: "));

    alunos.push({nome, nota});

    console.log(`Ok! Aluno cadastrado... \n`);
}while(true);

console.log('-'.repeat(40));

const maiorNota = alunos.reduce((a, b) => Math.max(a, b.nota), 0);
console.log(`A maior nota é ${maiorNota}\n`);

if(maiorNota >= 7){
    const destaques = alunos.filter(aluno => aluno.nota >= 7);

    for(const destaque of destaques){
        console.log(`- Aluno: ${destaque.nome}, Nota: ${destaque.nota}`);
    }

} else {
    console.log(`Não existem alunos destaque com notas maior que 7`);
}
