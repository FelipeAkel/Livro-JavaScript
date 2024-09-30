const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(form.inNumero.value);
    let resultado = '';

    for(let x = 1; x <= numero; x++){
        if(x % 2 == 1){
            resultado = resultado + '*';
        } else {
            resultado = resultado + '-';
        }
    }
    outResultado.innerText = resultado;
});

form.addEventListener("reset", () => {
    outResultado.innerText = "";
    form.inNumero.focus();
});