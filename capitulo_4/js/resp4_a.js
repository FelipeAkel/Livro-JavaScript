const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");
const outOperadorTernario = document.getElementById("outOperadorTernario");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const numero = Number(form.inNumero.value);
    const parImpar = Number.isInteger(numero / 2);

    if(parImpar == true){
        outResultado.innerText = `${numero} é Par`;
    } else {
        outResultado.innerText = `${numero} é Ímpar`;
    }

    parImpar == true ? outOperadorTernario.innerText = `${numero} é Par - Operador Ternario` : outOperadorTernario.innerText = `${numero} é Ímpar - Operador Ternario`;

});

form.addEventListener("reset", ()=>{
    outResultado.innerText = "";
    outOperadorTernario.innerText = "";
    form.inNumero.focus();
});