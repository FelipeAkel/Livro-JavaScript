const form = document.querySelector("form");
const outMedia = document.getElementById("outMedia");
const outSituacao = document.getElementById("outSituacao");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Previne o envio o formuário!

    const aluno = form.inAluno.value;
    const nota1 = Number(form.inNota1.value);
    const nota2 = Number(form.inNota2.value);

    const media = (nota1 + nota2) / 2;

    outMedia.innerText = `A média é ${media.toFixed(2)}`;
    if(media >= 7){
        outSituacao.innerText = `Aluno(a) ${aluno} você foi aprovado!`;
        outSituacao.classList = "text-success";
    } else if (media >= 4){
        outSituacao.innerText = `Aluno(a) ${aluno} você foi para recuperação!`;
        outSituacao.classList = "text-warning";
    } else {
        outSituacao.innerText = `Aluno(a) ${aluno} você foi reprovado!`;
        outSituacao.classList = "text-danger";
    }

});
