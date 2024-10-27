const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

const lista = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const candidato = form.inCandidato.value;
    const acertos = Number(form.inAcertos.value);

    lista.push({candidato, acertos});

    form.reset();
    form.inCandidato.focus();
    
    form.btnListarTodos.dispatchEvent(new Event("click"));
});

form.btnListarTodos.addEventListener("click", () => {
    if(lista.length == 0){
        alert("Atenção! A lista de candidatos está vazia.");
        return;
    }

    let resultado = `Listando candidados \n${('-').repeat(40)} \n`;
    for(let x = 0; x < lista.length; x++){
        resultado += `${lista[x].candidato} - ${lista[x].acertos} \n`;
    }
    outResultado.innerText = resultado;    
});

form.btnAprovados2Etapa.addEventListener("click", () => {
    if(lista.length == 0){
        alert("Atenção! A lista de candidatos está vazia.");
        return;
    }

    const notaCorte = Number(prompt("Qual o número de acertos para aprovação dos candidatos? "));
    const candidatoAprovados = lista.filter((candidato) => candidato.acertos >= notaCorte);
    
    if(candidatoAprovados.length == 0){
        alert(`Nenhum candidato teve acertos acima da nota de corte ${notaCorte}`);
        outResultado.innerText = ''; 
        return;
    }

    let resultado = `Listando candidados aprovados\n${('-').repeat(40)} \n`;
    for(let x = 0; x < candidatoAprovados.length; x++){
        resultado += `${candidatoAprovados[x].candidato} - ${candidatoAprovados[x].acertos} \n`;
    }
    outResultado.innerText = resultado; 
});
