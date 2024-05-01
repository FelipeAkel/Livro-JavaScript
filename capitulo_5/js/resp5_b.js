const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const chinchilas = Number(form.inChinchilas.value);
    const ano = Number(form.inAno.value);
    let resultado = '';
    let totalChinchilas = 0;

    for(let x = 1; x <= ano; x++){
        if(x == 1){
            totalChinchilas = totalChinchilas + chinchilas;
        } else {
            totalChinchilas = totalChinchilas * 3;
        }
        resultado = resultado + `${x}º Ano: ${totalChinchilas} \n`;
    }

    outResultado.innerText = resultado;

});

form.addEventListener("reset", ()=>{
    form.inChinchilas.value = "";
    form.inAno.value = "";
    outResultado.innerText = "";
    form.inChinchilas.focus();
});