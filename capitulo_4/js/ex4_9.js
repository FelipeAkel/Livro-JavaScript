const form = document.querySelector("form");
const outNumInvertido = document.getElementById("outNumInvertido");
const outNumInvalido = document.getElementById("outNumInvalido");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(form.inNumero.value);
    
    if(numero < 100 || numero > 999){
        outNumInvalido.innerText = `O número deve estar entre 100 e 999!`;
        outNumInvalido.classList = 'text-danger';
        return;
    }

    const num1 = Math.floor(numero / 100);
    let aux = numero - (num1 * 100);
    const num2 = Math.floor(aux / 10);
    aux = aux - (num2 * 10);
    const num3 = Math.floor(aux / 1);
    
    outNumInvertido.innerText = `Número invertido é: ${num3}${num2}${num1}`;
    
});

form.addEventListener("reset", () => {
    outNumInvalido.innerText = '';
    outNumInvertido.innerText = '';
    form.inNumero.focus();
});