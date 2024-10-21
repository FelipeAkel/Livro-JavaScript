const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");
const outAlerta = document.getElementById("outAlerta");

const lista = [
    {
    crianca: 'Lucas',
    idade: 4
    },
    {
    crianca: 'Violêta',
    idade: 4
    },
    {
    crianca: 'Ana',
    idade: 3
    },
    {
    crianca: 'Pedro',
    idade: 6
    },
    {
    crianca: 'João',
    idade: 6
    },
    {
    crianca: 'Marina',
    idade: 4
    },
    {
    crianca: 'Juliana',
    idade: 3
    },
    {
    crianca: 'Cátia',
    idade: 6
    },
];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const crianca = form.inCrianca.value;
    const idade = Number(form.inIdade.value);

    if(idade < 0 || idade > 12){
        anexarAlerta('<b>Atenção!</b> A idade da criança deve está entre 0 e 12', 'warning');
        return;
    }

    lista.push({ crianca, idade });

    form.reset();
    form.inCrianca.focus();

    form.btnListarTodos.dispatchEvent(new Event("click"));
});

form.btnListarTodos.addEventListener("click", () => {
    
    this.verificaLista();

    let resultado = '';
    for(const dado of lista){
        resultado += `<li class='list-group-item list-group-item-action list-group-item-primary'> ${dado.crianca} - ${dado.idade} anos </li>\n`;
    }

    outResultado.innerHTML = resultado;
});

form.btnResumirIdade.addEventListener("click", () => {

    this.verificaLista();

    const listaCopia = lista.sort((a, b) => a.idade - b.idade);
    let arrNomes = [];
    let auxIdade = listaCopia[0].idade;
    let resultado = '';
    
    for(const dados of listaCopia){
        if(dados.idade == auxIdade) {
            arrNomes.push(dados.crianca);
        } else {
            resultado += `<li class='list-group-item list-group-item-action list-group-item-info'>`;
            resultado += `<b>${auxIdade}</b> anos(s): <b>${arrNomes.length}</b> criança(s) - `;
            resultado += `${((arrNomes.length / listaCopia.length) * 100).toFixed(2)}% <br>`;
            resultado += `<b>Nome(s):</b> (${arrNomes.join(', ')}) `;
            resultado += `</li>`;

            arrNomes = [];
            auxIdade = dados.idade;
            arrNomes.push(dados.crianca);
        }
    }
    
    resultado += `<li class='list-group-item list-group-item-action list-group-item-info'>`;
    resultado += `<b>${auxIdade}</b> anos(s): <b>${arrNomes.length}</b> criança(s) - `;
    resultado += `${((arrNomes.length / listaCopia.length) * 100).toFixed(2)}% <br>`;
    resultado += `<b>Nome(s):</b> (${arrNomes.join(', ')}) `;
    resultado += `</li>`;

    outResultado.innerHTML = resultado;
});

function verificaLista(){
    if(lista.length == 0){
        anexarAlerta('<b>Atenção!</b> Não existe crianças na lista', 'warning');
        return;
    }
}

const anexarAlerta = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" data-bs-target="#outAlerta" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  outAlerta.append(wrapper);
}
