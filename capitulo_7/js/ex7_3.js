const form = document.querySelector("form");
const outPalavraFrase = document.getElementById("outPalavraFrase");
const outInvertida = document.getElementById("outInvertida");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const palavra = form.inPalavra.value;

    invertida = ''; 
    for(let x = (palavra.length - 2); x >= 0; x--){
        invertida += palavra.charAt(x).toLowerCase();
    }
    // invertida = invertida.toLowerCase();
    let ultimaLetra = palavra.charAt(palavra.length - 1)
    invertida = ultimaLetra.toUpperCase() + invertida;
    
    outPalavraFrase.innerText = palavra;
    outInvertida.innerText = invertida;
});
