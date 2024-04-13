const form = document.querySelector("form");
const outMedicamento = document.getElementById("outMedicamento");
const outPromocao = document.getElementById("outPromocao");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const medicamento = form.inMedicamento.value;
    const preco = Number(form.inPreco.value);
    const desconto = Math.floor(preco * 2);

    outMedicamento.innerText = `Promoção do Medicamento: ${medicamento}`;
    outPromocao.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`;
});