const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

const arrClubes = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const clube = form.inClube.value;

    arrClubes.push(clube);

    form.reset();
    form.inClube.focus();

    form.btnListarClubes.dispatchEvent(new Event("click"));
});

form.btnListarClubes.addEventListener("click", () => {
    this.listaVazia();

    let resultado = '';
    for(let x = 0; x < arrClubes.length; x++){
        resultado += `${x + 1} - ${arrClubes[x]} \n`;
    }
    outResultado.innerText = resultado;
});

form.btnMostrarTabelas.addEventListener('click', () => {
    this.listaVazia();

    if(arrClubes.length % 2 > 0){
        alert('Atenção! Existe clube sem time adiversário.');
        return;
    }

    let resultado = '';
    for(let x = 0; x < arrClubes.length; x++){
        if(x % 2 == 0){
            resultado += `${arrClubes[x]} x `;
        } else {
            resultado += `${arrClubes[x]} \n`;
        }
    }
    outResultado.innerText = resultado;
});

function listaVazia(){
    if(arrClubes.length === 0){
        alert('Atenção! A lista de clubes está vazia.');
        return;
    }
}