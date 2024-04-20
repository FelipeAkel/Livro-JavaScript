const form = document.querySelector("form");
const outNota100 = document.getElementById("outNota100");
const outNota50 = document.getElementById("outNota50");
const outNota10 = document.getElementById("outNota10");
const outSaqueIndisponivel = document.getElementById("outSaqueIndisponivel");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let valor = Number(form.inValor.value);
    const possivelSaque = valor / 10;
    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;

    outNota100.innerText = "";
    outNota50.innerText = "";
    outNota10.innerText = "";
    outSaqueIndisponivel.innerText = "";

    // Não sendo multiplo de 10, valor indisponível!
    if(!(Number.isInteger(possivelSaque))){
        outSaqueIndisponivel.innerText = `Saque Indisponível, o caixa contém as notas de R$: 100, 50 e 10`;
        return;
    }
    
    nota100 = Math.floor(valor / 100) ;
    if(nota100 >= 1){
        valor = valor - (nota100 * 100);
        outNota100.innerText = `Notas de R$ 100 -> ${nota100}`;
    }

    nota50 = Math.floor(valor / 50);
    if(nota50 >= 1){
        valor = valor - (nota50 * 50);
        outNota50.innerText = `Notas de R$ 50 -> ${nota50}`;
    }

    nota10 = Math.floor(valor / 10);
    if(nota10 >= 1){
        valor = valor - (nota10 * 10);
        outNota10.innerText = `Notas de R$ 10 -> ${nota10}`;
    }
    
});

form.addEventListener("reset", ()=>{
    outNota100.innerText = "";
    outNota50.innerText = "";
    outNota10.innerText = "";
    outSaqueIndisponivel.innerText = "";
});