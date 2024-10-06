const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");
const outNumApostados = document.getElementById("outNumApostados");
const outChances = document.getElementById("outChances");
const outDicas = document.getElementById("outDicas");

const numPremiado = Math.floor(Math.random() * 100) + 1;  // Num aleatório entre 1 e 100
// const numPremiado = 25;
let numApostados = [];
let chances = 6;
let dicas = "";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(form.inNumero.value);

    if(numero === numPremiado){
        outResultado.innerText = `Parabéns! Você acertou o número premiado ${numPremiado}`;
        outResultado.classList = "text-success";
        this.jogarNovamente();
    } else {
        if(numApostados.includes(numero)){
            outDicas.innerText = `Atenção! Você já apostou esse número. Tente outros diferentes dos Números Apostados`;
            outDicas.classList = "text-warning";
            form.inNumero.value = "";
            form.inNumero.focus();
            return;
        }

        numApostados.push(numero);
        outNumApostados.innerText =  numApostados.join(' - ');
        outChances.innerText = chances - numApostados.length;

        if(numApostados.length >= chances){
            outResultado.innerText = `Perdeu! Você não acertou o número premiado ${numPremiado}.\n Boa sorte na próxima!`;
            outResultado.classList = "text-danger";
            this.jogarNovamente();
            return;
        }

        const dica = numPremiado > numero ? 'MAIOR' : 'MENOR';
        outDicas.innerText = `O número premiado é ${dica} que ${numero}`;

    }
});

form.btnJogarNovamente.addEventListener("click", () => {
    location.reload();
});

function jogarNovamente(){
    form.inNumero.disabled = "true";
    form.btnApostar.disabled = "true";
    form.btnJogarNovamente.classList.remove("invisible");
}