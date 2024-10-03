const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");
const outNumApostados = document.getElementById("outNumApostados");
const outChances = document.getElementById("outChances");
const outDicas = document.getElementById("outDicas");

const numPremiado = Math.floor(Math.random() * 100) + 1;  // Num aleatório entre 1 e 100
let numApostados = [];
let chances = 6;
let dicas = "";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    this.resetResultado();

    const numero = Number(form.inNumero.value);

    if(numApostados.includes(numero)){
        outNumApostados.innerText = `Atenção! Você já apostou este número ${numero}.`;
        outNumApostados.classList = "text-warning";
        this.inNumeroFocus();
        return;
    }

    numApostados.push(numero);
    outNumApostados.innerText = `Números apostados: ${numApostados.join(' - ')}`;
    outNumApostados.classList.remove("text-warning");
    
    if(numero === numPremiado){
        outResultado.innerText = `Parabéns! Você acertou o número premiado ${numero}.`;
        outResultado.classList = "text-success";
        this.resetDados();
        this.inNumeroFocus();
        return;
    }

    chances = chances - 1;
    outChances.innerText = `Chances restantes: ${chances}`;

    if (chances === 0){
        outResultado.innerText = `Perdeu! O número premiado era ${numPremiado}.`;
        outResultado.classList = "text-danger";
        this.resetDados();
        this.inNumeroFocus();
        return;
    }

    if(numPremiado > numero){
        outDicas.innerText = `O número premiado é MAIOR que ${numero}`;
    } else {
        outDicas.innerText = `O número premiado é MENOR que ${numero}`;
    }

    this.inNumeroFocus();
});

form.addEventListener("reset", () => {
    this.resetResultado();
    this.resetDados();
    form.inNumero.focus();
});

function inNumeroFocus(){
    form.inNumero.value = "";
    form.inNumero.focus();
}

function resetResultado() {
    outResultado.innerText = ``;
    outResultado.classList.remove("text-success", "text-danger");
}

function resetDados (){
    outNumApostados.innerText =``;
    outChances.innerText = ``;
    outDicas.innerText = ``;
    numApostados = [];
    chances = 6;
}