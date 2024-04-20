const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const nome = form.inNome.value;
    const sexo = form.inSexo.value;
    const altura = Number(form.inAltura.value);
    let peso = null;

    if(sexo == 'M'){
        peso = 22 * altura**2
    } else {
        peso = 21 * altura**2
    }

    outResultado.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}`;
});

form.addEventListener("reset", ()=>{
    outResultado.innerText = "";
});