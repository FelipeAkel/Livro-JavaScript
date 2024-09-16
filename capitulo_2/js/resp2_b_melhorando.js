const form = document.querySelector("form");
const outTotalPagar = document.getElementById("outTotalPagar");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(form.inValor.value);
    const tempo = Number(form.inTempo.value);
    const totalPagar = valor * (Math.ceil(tempo / 15));

    outTotalPagar.innerText = `Total a pagar R$: ${totalPagar.toFixed(2)}`;
});

form.addEventListener("reset", () => {
    outTotalPagar.innerText = '';
    form.inValor.focus();
});