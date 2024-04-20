const form = document.querySelector("form");
const outFusoHorario = document.getElementById("outFusoHorario");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const time = Number(form.inTime.value);
    let horarioFranca = time + 5;
    let periodo = 'AM';

    if(horarioFranca > 24){
        horarioFranca = horarioFranca - 24;
    }
    if(horarioFranca >= 12 && horarioFranca <= 23.59)
        periodo = 'PM';

    outFusoHorario.innerText = `Hora na França: ${horarioFranca.toFixed(2)} ${periodo}`;

});

form.addEventListener("reset", ()=>{
    outFusoHorario.innerText = "";
});