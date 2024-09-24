const form = document.querySelector("form");
const outDsConta = document.getElementById("outDsConta");
const outQtdTotal = document.getElementById("outQtdTotal");
let dsContaValor = '';
let quantidade = 0;
let total = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const dsConta = form.inDsConta.value;
    const valor = Number(form.inValor.value);

    dsContaValor = dsContaValor + `${dsConta} - R$: ${valor.toFixed(2)} \n`;
    quantidade = quantidade + 1;
    total = total + valor;

    outDsConta.innerText = dsContaValor + " ------------------ ";
    outQtdTotal.innerText = `${quantidade} Conta(s) - Total R$: ${total.toFixed(2)}`;

    form.inDsConta.value = "";
    form.inValor.value = "";
    form.inDsConta.focus();
});

form.addEventListener("reset", () => {
    outDsConta.innerText = "";
    outQtdTotal.innerText = "";
    form.inDsConta.focus();
});
