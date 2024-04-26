const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const numero = Number(form.inNumero.value);
    let contDivisores = 0;
    let restoDivisao = null;

    for(let x = 1; x <= numero; x++){
        restoDivisao = numero % x;
        // console.log('restoDivisao' + restoDivisao, typeof restoDivisao);

        restoDivisao == 0 ? contDivisores = contDivisores + 1 : "";
        if(contDivisores > 2){ // Melhoria de desempenho, caso o usuário digite 1000 o loop não vai executar 1000 vezes pois existe uma verificação
            break;
        }
    }
    // console.log('contDivisores' + contDivisores, typeof contDivisores);

    if(contDivisores == 2){
        outResultado.innerText = `O número ${numero} é PRIMO`;
    } else {
        outResultado.innerText = `O número ${numero} NÃO é PRIMO`;
    }
});