const form = document.querySelector("form");
const outAlerta = document.getElementById("outAlerta");
const outAtendimento = document.getElementById("outAtendimento");
const outFilaEspera = document.getElementById("outFilaEspera");
const out1Fila = document.getElementById("out1Fila");

const fila = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const paciente = form.inPaciente.value;
    const idade = Number(form.inIdade.value);

    fila.push({paciente, idade});

    form.reset();
    form.inPaciente.focus();

    form.btnListarTodos.dispatchEvent(new Event("click"));
});

form.btnListarTodos.addEventListener("click", () => {
    if(fila.length === 0){
        appendAlert('Atenção! A Fila está vazia', 'warning')
        return;
    }

    let resultado = `<ul class="list-group">`;
    for(let x = 0; x < fila.length; x++){
        resultado += `<li class="list-group-item"> ${x + 1}º - <b>Paciente:</b> ${fila[x].paciente} <b>Idade:</b> ${fila[x].idade} </li>  `;
    }
    resultado += `</ul>`;

    outFilaEspera.innerHTML = resultado;

});

form.btnUrgencia.addEventListener("click", () => {
    const paciente = form.inPaciente.value;
    const idade = Number(form.inIdade.value);

    fila.unshift({paciente, idade});

    form.reset();
    form.inPaciente.focus();

    form.btnListarTodos.dispatchEvent(new Event("click"));
});

form.btnAtender.addEventListener("click", () => {
    if(fila.length === 0){
        appendAlert('Atenção! A Fila está vazia', 'warning')
        return;
    }

    const atendimento = fila.pop();
    let resultado = `Paciente: ${atendimento.paciente} Idade: ${atendimento.idade}`;
    outAtendimento.innerText = resultado;

    resultado = `<ul class="list-group">`;
    for(let x = 0; x < fila.length; x++){
        resultado += `<li class="list-group-item"> ${x + 1}º - <b>Paciente:</b> ${fila[x].paciente} <b>Idade:</b> ${fila[x].idade} </li>  `;
    }
    resultado += `</ul>`;

    outFilaEspera.innerHTML = resultado;
    out1Fila.innerText = '';

});

form.btn1Fila.addEventListener("click", () => {
    if(fila.length === 0){
        appendAlert('Atenção! A Fila está vazia', 'warning')
        return;
    }

    let resultdo = `Paciente: ${fila[0].paciente} Idade: ${fila[0].idade}`;
    out1Fila.innerText = resultdo;
});


const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  outAlerta.append(wrapper)
}

