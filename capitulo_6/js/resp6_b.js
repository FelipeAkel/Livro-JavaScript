const form = document.querySelector("form");
const outNumeros = document.getElementById("outNumeros");
const outVerificarOrdem = document.getElementById("outVerificarOrdem");

const arrNumero = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(form.inNumero.value);

    const numRepetido = arrNumero.includes(numero); // indexOf ou filter(aux => axu == numero)
    if(numRepetido === true){
        alert('Atenção! Este número já foi incluído na lista.');
        return;
    }

    arrNumero.push(numero);

    let resultado = `<b>Números:</b> ${arrNumero.join(', ')}`;
    outNumeros.innerHTML = resultado;

    outVerificarOrdem.innerText = '';
    form.inNumero.value = '';
    form.inNumero.focus();
});

form.btnVerificarOrdem.addEventListener("click", () => {
    
    if(arrNumero.length == 0){
        alert('Atenção! A lista está vazia.');
        return;
    } 
    
    const arrOrdenado = [...arrNumero]; // ou arrNumero.slide()
    arrOrdenado.sort((a, b) => a - b);

    let listaOrdenada = true;
    for(let x = 0; x < arrNumero.length; x++){
        let numOriginal = arrNumero[x];
        let numOrdenado = arrOrdenado[x];

        if(numOriginal != numOrdenado){
            listaOrdenada = false;
            break;
        }
    }

    let resultado = '';
    if(listaOrdenada === true){
        resultado = 'A lista está ordenanda em ordem crescente.';
    } else {
        resultado = 'Atenção! A lista não está em ordem crescente.'
    }

    outVerificarOrdem.innerText = resultado;
});