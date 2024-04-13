const form = document.querySelector("form");
const outFilme = document.getElementById("outFilme");
const outHorasMinutos = document.getElementById("outHorasMinutos");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const filme = form.inFilme.value;
    const inDuracao = Number(form.inDuracao.value);
    let horas = inDuracao / 60;
    let minutos = inDuracao % 60;
    
    horas = Math.floor(horas)
    
    outFilme.innerText = `Filme: ${filme}`;
    outHorasMinutos.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;
});

// console.log(horas, typeof horas);
// console.log(minutos, typeof minutos);