const form = document.querySelector("form");
const outAtendimento = document.getElementById("outAtendimento");
const outFilaEspera = document.getElementById("outFilaEspera");

const pacientes = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.inPaciente.value;
    let filaEspera = '';
    pacientes.push(nome);

    for(let x = 0; x < pacientes.length; x++) {
        filaEspera += `${x + 1}º - ${pacientes[x]} \n`;
    }

    outFilaEspera.innerText = filaEspera;

    form.inPaciente.value = "";
    form.inPaciente.focus();

});

form.btnUrgencia.addEventListener("click", () => {
    // Verifica se o formulário está válido 
    if(!form.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em carater de Urgência!");
        form.inPaciente.value = "";
        form.inPaciente.focus();
        return
    }

    const nome = form.inPaciente.value;
    pacientes.unshift(nome);

    let filaEspera = '';
    for(let x = 0; x < pacientes.length; x++) {
        filaEspera += `${x + 1}º - ${pacientes[x]} \n`;
    }

    outFilaEspera.innerText = filaEspera;
    form.inPaciente.value = "";
    form.inPaciente.focus();

});

form.btnAtender.addEventListener("click", () => {

    if(pacientes.length == 0){
        alert("Não há pacientes na lista de espera");
        form.inPaciente.focus();
        return
    }

    const atendimento = pacientes.shift();
    
    let filaEspera = '';
    for(let x = 0; x < pacientes.length; x++) {
        filaEspera += `${x + 1}º - ${pacientes[x]} \n`;
    }

    outAtendimento.innerText = atendimento;
    outFilaEspera.innerText = filaEspera;

    form.inPaciente.value = "";
    form.inPaciente.focus();

});