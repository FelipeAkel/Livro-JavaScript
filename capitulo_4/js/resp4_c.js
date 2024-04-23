const form = document.querySelector("form");
const outTempo = document.getElementById("outTempo");
const outTroco = document.getElementById("outTroco");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const valor = Number(form.inValor.value);
    let troco = null;
    let tempo = null;

    if(valor < 1.00){
        outTempo.innerText = "Valor Insuficiente";
        outTroco.innerText = "";
        return;
    }

    if(valor < 1.75){
        troco = valor - 1.00;
        tempo = 30;
    } else if (valor < 3.00){
        troco = valor - 1.75;
        tempo = 60;
    } else {
        troco = valor - 3.00;
        tempo = 120;
    }
    
    outTempo.innerText = `Tempo: ${tempo} min`;
    troco != 0 ? outTroco.innerText = `Troco R$: ${troco.toFixed(2)}` : outTroco.innerText = '';

});

form.addEventListener("reset", ()=> {
    outTempo.innerText = "";
    outTroco.innerText = "";
});