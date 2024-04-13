const form = document.querySelector("form");
const outPromocao = document.getElementById("outPromocao");
const outDesconto = document.getElementById("outDesconto");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const produto = form.inProduto.value;
    const preco = Number(form.inPreco.value);
    const desconto = preco / 2;
    const total = (preco * 2) + desconto;

    outPromocao.innerText = `${produto} - Promoção: Leve 3 por R$: ${total.toFixed(2)}`;
    outDesconto.innerText = `O 3º produto custa apenas R$: ${desconto.toFixed(2)}`;
});