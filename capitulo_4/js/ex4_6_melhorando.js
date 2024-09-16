const form = document.querySelector("form");
const outNota100 = document.getElementById("outNota100");
const outNota50 = document.getElementById("outNota50");
const outNota10 = document.getElementById("outNota10");
const outValorNaoDisponivel = document.getElementById("outValorNaoDisponivel");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(form.inValor.value);
    const multiplo10 = valor % 10;

    this.limparDados();

    if(multiplo10 !== 0){
        outValorNaoDisponivel.innerText = 'Desculpe! Valor para saque não disponível';
        outValorNaoDisponivel.classList = 'text-danger';
        return;
    }

    const nota100 = Math.floor(valor / 100);
    let sobra = (valor - (nota100 * 100));
    const nota50 = Math.floor(sobra / 50) ;
    sobra = (valor - (nota100 * 100) - (nota50 * 50));
    const nota10 = sobra / 10;
    
    if(nota100 > 0){
        outNota100.innerText = `Notas de R$ 100: [ ${nota100} ]`;
    }
    if(nota50 > 0){
        outNota50.innerText = `Notas de R$ 50: [ ${nota50} ]`;
    }
    if(nota10 > 0){
        outNota10.innerText = `Notas de R$ 10: [ ${nota10} ] `;
    }
});

form.addEventListener("reset", () => {
    this.limparDados();
    form.inValor.focus();
});

function limparDados(){
    outNota100.innerText = ` `;
    outNota50.innerText = ` `;
    outNota10.innerText = ` `;
    outValorNaoDisponivel.innerText = ` `;
}