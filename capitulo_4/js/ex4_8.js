const form = document.querySelector("form");
const outValorDividido = document.getElementById("outValorDividido");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(form.inValor.value);
    const parcelas = Math.floor(valor / 20);
    let valorParcelas = 0;

    if(parcelas <= 0){
        outValorDividido.innerText = `Valor menor que R$: 20,00 reais não pode ser divido! Total a pagar R$: ${valor.toFixed(2)} reais`;
    } else if (parcelas >= 6) {
        valorParcelas = valor / 6;
        outValorDividido.innerText = `Pode parcelar em até 6x de R$: ${valorParcelas.toFixed(2)} reais`;
    } else {
        valorParcelas = valor / parcelas;
        outValorDividido.innerText = `Pode parcelar em até ${parcelas}x de R$: ${valorParcelas.toFixed(2)} reais`;
    }
});

form.addEventListener("reset", () => {
    outValorDividido.innerText = "";
    form.inValor.focus();
});