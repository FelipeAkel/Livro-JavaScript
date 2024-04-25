const form = document.querySelector("form");
const outDsConta = document.getElementById("outDsConta");
const outQtdTotal = document.getElementById("outQtdTotal");

let descricaoConta = '';
let contContas = 0;
let total = 0;

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const dsConta = form.inDsConta.value;
    const valor = Number(form.inValor.value);

    descricaoConta = descricaoConta + `${dsConta} - R$: ${valor.toFixed(2)} \n`
    contContas = contContas + 1;
    total = total + valor;

    outDsConta.innerText = `${descricaoConta} ------------------------`;
    outQtdTotal.innerText = `${contContas} Conta(s) - Total R$: ${total.toFixed(2)}`;
    
    form.inDsConta.value = "";
    form.inValor.value = "";
    form.inDsConta.focus();
});