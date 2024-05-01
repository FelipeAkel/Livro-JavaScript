const form = document.querySelector("form");
const outDivisores = document.getElementById("outDivisores");
const outPerfeito = document.getElementById("outPerfeito");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const numero = Number(form.inNumero.value);
    let divisores = '';
    let soma = 0;

    for(let x = 1; x < numero; x++){
        let resDivisao = numero / x;
        if(Number.isInteger(resDivisao)){
            // console.log(resDivisao, typeof resDivisao);
            divisores = `${divisores} ${x},`;
            soma = soma + x;
        }
    }

    outDivisores.innerText = `${divisores} (Soma: ${soma})`;

    if(soma === numero){
        outPerfeito.innerText = `${numero} É um Número Perfeito`;
    } else {
        outPerfeito.innerText = `${numero} NÃO É um Número Perfeito`;
    }
    
});

form.addEventListener("reset", ()=>{
    form.inNumero.value = '';
    outDivisores.innerText = '';
    outPerfeito.innerText = '';
    form.inNumero.focus();
});