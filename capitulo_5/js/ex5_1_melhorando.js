const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");
const outNumInvalido = document.getElementById("outNumInvalido");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    this.limparDados();

    const numero = Number(form.inNumero.value);
    
    if(numero <= 0 || numero >= 11){
        outNumInvalido.innerText = `Erro! O número deve ser entre 1 e 10.`;
        outNumInvalido.classList = "text-danger";
        return;
    }
    
    let resultado = "";
    for(let x = 1; x <= 10; x++) {
        resultado = resultado + `${numero} x ${x} = ${numero * x} \n`;
    }
    outResultado.innerText = resultado;
    
});

form.addEventListener("reset", () => {
    this.limparDados();
    form.inNumero.focus();
});

function limparDados(){
    outResultado.innerText = "";
    outNumInvalido.innerText = "";
}