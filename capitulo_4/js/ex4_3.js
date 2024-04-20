const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const bairro = form.inBairro.value;
    let taxaEntrega = null;

    switch(bairro){
        case "Sobradinho":
            taxaEntrega = 5.00;
            break;
        case "Asa Sul":
            taxaEntrega = 9.50;
            break;
        case "Asa Norte":
            taxaEntrega = 11.75;
            break;
        case "Planaltina - DF":
            taxaEntrega = 5.75;
            break;
        default:
            taxaEntrega = 15.00;
    }

    outResultado.innerText = `Taxa de Entrega R$: ${taxaEntrega.toFixed(2)}`;
});

form.addEventListener("reset", ()=>{
    outResultado.innerText = "";
});