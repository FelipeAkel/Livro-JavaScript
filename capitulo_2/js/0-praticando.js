const form = document.querySelector("form");
const outTotalPagar = document.getElementById("outTotalPagar");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorUso = Number(form.inValorUso.value);
    const tempo = Number(form.inTempo.value);
    const totalTempo = Math.ceil(tempo / 15);
    const totalPagar = valorUso * totalTempo;

    outTotalPagar.innerText = `O total a pagar é de R$: ${totalPagar.toFixed(2)}`;
});

form.addEventListener("reset", () => {
    outTotalPagar.innerText = "";
    form.inValorUso.focus();
});