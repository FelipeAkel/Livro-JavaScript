const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const fruta = form.inFruta.value;
    const numero = Number(form.inNumero.value);
    let resultado = '';
    
    for(let x = 1; x <= numero; x++){
        resultado = resultado + ' * ' + fruta;
    }

    outResultado.innerText = resultado;
});

form.addEventListener("reset", ()=>{
    form.inFruta.focus();
    form.inFruta.value = '';
    form.inNumero.value = '';
    outResultado.innerText = '';
});