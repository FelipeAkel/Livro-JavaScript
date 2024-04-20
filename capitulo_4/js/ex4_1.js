const form = document.querySelector("form");
const outMedia = document.getElementById("outMedia");
const outSituacao = document.getElementById("outSituacao");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const aluno = form.inAluno.value;
    const nota1 = Number(form.inNota1.value);
    const nota2 = Number(form.inNota2.value);
    const media = (nota1 + nota2) / 2;

    outMedia.innerText = `Média das Notas ${media.toFixed(2)}`;
    if(media >= 7.0){
        outSituacao.innerText = `Parabéns! ${aluno} você foi Aprovado(a)`;
        outSituacao.style.color = "blue";
    } else {
        outSituacao.innerText = `Ops! ${aluno} você foi Reprovado(a)`;
        outSituacao.style.color = "red";
    }

});