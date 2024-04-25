const form = document.querySelector("form");
const outPre = document.querySelector("pre");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const numero = Number(form.inNumero.value);
    let resposta = "";

    for(let x = numero; x >= 2; x--){
        resposta = resposta + x + ", ";
        // Para evitar a verificação dessa consição x vezes, vamos melhorar a lógica a atribuir o "." fora do loop.
        // x != 1 ? resposta = resposta + ", " :  resposta = resposta + ". ";
    }
    resposta = resposta + 1 + ". ";

    outPre.innerText = `Entre ${numero} e 1:\n${resposta}`;
});