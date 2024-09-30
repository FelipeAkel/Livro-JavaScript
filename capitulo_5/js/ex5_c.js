const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const conta = Number(form.inConta.value);
    const parcelas = Number(form.inParcelas.value);
    let totalParcela = Math.floor(conta / parcelas);
    let totalParcelaFinal = totalParcela + (conta % parcelas)
    let resultado = '';

    for(let x = 1; x < parcelas; x++) {
        resultado = `${resultado} ${x}º parcela: R$ ${totalParcela.toFixed(2)} \n`;
    }

    resultado = `${resultado} ${parcelas}º parcela: R$ ${totalParcelaFinal.toFixed(2)} \n`;

    outResultado.innerText = resultado;

});

form.addEventListener("reset", () => {
    form.inConta.focus();
    outResultado.innerText = "";
});