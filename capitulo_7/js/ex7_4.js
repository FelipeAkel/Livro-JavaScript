const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.inNome.value.trim();

    if(!nome.includes(' ')){
        alert("Atenção! O nome deve ser no mínimo composto.")
        return;
    }
    let resultado = '';
    
    const primeiroNome = nome.indexOf(' '); // Posição 1º nome
    const ultimoNome = nome.lastIndexOf(' '); // Posição último nome
    
    resultado = nome.substr(0, primeiroNome) + ' ' + nome.substr(ultimoNome);

    // Primeiro e Segundo Nome
    // let contador = 0;
    // for(let x=0; x < nome.length; x++) {
    //     resultado += nome.charAt(x).toUpperCase();
    //     if(nome.charAt(x) == ' '){
    //         contador += 1;
    //     }
    //     if(contador == 2){
    //         break;
    //     }
    // }

    outResultado.innerText = resultado;
    form.inNome.value = '';
    form.inNome.focus();
});