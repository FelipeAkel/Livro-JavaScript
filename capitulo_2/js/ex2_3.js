const form = document.querySelector("form");
const outVeiculo = document.getElementById("outVeiculo");
const outPromocao = document.getElementById("outPromocao");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const veiculo = form.inVeiculo.value;
    const preco = Number(form.inPreco.value);
    let entrada = preco / 2;
    let dividido = entrada / 12;

    outVeiculo.innerText = `Veículo: ${veiculo}`;
    outPromocao.innerText = `Entrada de 50% R$ ${entrada.toFixed(2)} \nDivido em 12x de R$: ${dividido.toFixed(2)}`;
});