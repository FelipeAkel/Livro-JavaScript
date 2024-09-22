const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");
const outNumInvalido = document.getElementById("outNumInvalido");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    this.limparDados();

    const numero = Number(form.inNumero.value);

    if(numero < 1) {
        outNumInvalido.innerText = `Erro! Número deve ser maior ou igual a 1`;
        outNumInvalido.classList = "text-danger";
        return;
    }

    let resultado = "";
    for(let x = numero; x >= 2; x--) {
        resultado = resultado + `${x}, `;
    }
    resultado = resultado + `1. `; // Colocado fora para não fazer a verificação toda vez no loop, ganho de performance!

    outResultado.innerHTML = `<b>Entre ${numero} e 1:</b> \n` + resultado;

});

form.addEventListener("reset", () => {
    this.limparDados();
    form.inNumero.focus();
});

function limparDados() {
    outResultado.innerText = "";
    outNumInvalido.innerText = "";
}