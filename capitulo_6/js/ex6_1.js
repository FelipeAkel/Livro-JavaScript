
const form = document.querySelector("form");
const outAtendimento = document.getElementById("outAtendimento");
const outListaPacientes = document.getElementById("outListaPacientes");

const arrPacientes = []; 

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let listaPacientes = '';
    const paciente = form.inPaciente.value;
    arrPacientes.push(paciente);

    for(let x = 0; x < arrPacientes.length; x++){
        listaPacientes = listaPacientes + `${x + 1}º - ${arrPacientes[x]} \n`;
    }

    outListaPacientes.innerText = listaPacientes;
    form.inPaciente.value = '';
    form.inPaciente.focus();
});

form.btnUrgencia.addEventListener("click", () => {
    if(!form.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgência");
        form.inPaciente.focus();
        return;
    }

    let listaPacientes = '';
    const paciente = form.inPaciente.value;
    arrPacientes.unshift(paciente);

    for(x = 0; x < arrPacientes.length; x++){
        listaPacientes = listaPacientes + `${x + 1}º - ${arrPacientes[x]} \n`;
    }

    outListaPacientes.innerText = listaPacientes;
    form.inPaciente.value = '';
    form.inPaciente.focus();
});

form.btnAtender.addEventListener("click", () => {
    if(arrPacientes.length == 0){
        alert("Não há pacientes na lista de espera");
        form.inPaciente.focus();
        return;
    }

    let listaPacientes = '';
    const atender = arrPacientes.shift();

    for(x = 0; x < arrPacientes.length; x++){
        listaPacientes = listaPacientes + `${x + 1}º - ${arrPacientes[x]} \n`;
    }

    outAtendimento.innerText = atender;
    outListaPacientes.innerText = listaPacientes;
});