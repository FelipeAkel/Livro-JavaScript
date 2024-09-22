const outResultado = document.getElementById("outResultado");

function iniciarPrograma () {
    let numero = null;
    
    do {
        numero = Number(prompt("Número: "))

        if(numero == 0 || isNaN(numero)){
            alert('Ops! Digite um número válido...')
        }

    } while( numero == 0 || isNaN(numero));

    let pares = "";
    for(let x = 2; x <= numero; x = x + 2) {
        pares = pares + x + `, `;
    }
    pares = pares.slice(0, -2) + '. ';

    outResultado.innerText = pares;

}

function limparDados() {
    outResultado.innerText = '';
}