const form = document.querySelector("form");
const outTotalPagar = document.getElementById("outTotalPagar");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valor = Number(form.inValor.value);
    const tempo = Number(form.inTempo.value);
    let contCiclo = Math.ceil(tempo / 15) ;
    let totalPagar = contCiclo * valor;
    
    outTotalPagar.innerText = `Valor a Pagar R$: ${totalPagar.toFixed(2)}`;
    // console.log(contCiclo, typeof contCiclo);
    // console.log(totalPagar, typeof totalPagar);
});