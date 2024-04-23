const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const velPermitida = Number(form.inVelPermitida.value);
    const velCondutor = Number(form.inVelCondutor.value);
    const velAte20 = velPermitida * 1.20;

    if(velCondutor <= velPermitida){
        outResultado.innerText = "Sem Multa";
        return;
    }

    velCondutor <= velAte20 ? outResultado.innerText = "Multa Leve" : outResultado.innerText = "Multa Grave";

    // console.log(velAte20);
});

form.addEventListener("reset", ()=> {
    outResultado.innerText = "";
});