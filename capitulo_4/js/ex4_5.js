const form = document.querySelector("form");
const outResultaddo = document.getElementById("outResultaddo");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const numero = Number(form.inNumero.value);
    const raiz = Math.sqrt(numero);
    const verificacao = Number.isInteger(raiz);

    if (verificacao == true) {
        outResultaddo.innerText = `Raiz Perfeita: ${raiz}`;
    } else {
        outResultaddo.innerText = `Não é uma Raiz Quadrada Perfeita`;
    } 
});

form.addEventListener("reset", ()=>{
    outResultaddo.innerText = "";
});