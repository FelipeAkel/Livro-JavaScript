const form = document.querySelector("form");
const outPre = document.querySelector("pre");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const numero = Number(form.inNumero.value);
    let resposta = '';

    for(let x = 1; x <= 10; x++){
        resposta = resposta + `${numero} x ${x} = ${numero * x}\n`;
    }

    outPre.innerText = resposta;
});