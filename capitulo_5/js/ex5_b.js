const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const produto = form.inProduto.value;
    const quantEtiqueta = Number(form.inQuantEtiqueta.value);
    let resultado = "";
    let pulaLinha = 0;

    for(let x = 0; x < quantEtiqueta; x++) {
        resultado = `${resultado}  ${produto} `;
        pulaLinha = pulaLinha + 1;

        if(pulaLinha == 2){
            resultado = `${resultado} \n`;
            pulaLinha = 0;
        }
    }

    outResultado.innerText = resultado;

});

form.addEventListener("reset", () => {
    outResultado.innerText = "";
    form.inProduto.focus();
});