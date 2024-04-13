const form = document.querySelector("form");
const outValorPagar = document.getElementById("outValorPagar");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const preco = Number(form.inPreco.value);
    const consumo = Number(form.inConsumo.value);
    const valorPagar = (preco * consumo) / 1000;

    outValorPagar.innerText = `Valor a pagar R$: ${valorPagar.toFixed(2)}`;
});