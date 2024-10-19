const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

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

    lista.push({crianca, idade});

    form.reset();
    form.inCrianca.focus();

    form.btnListarTodos.dispatchEvent(new Event("click"));
});

form.btnListarTodos.addEventListener("click", () => {

    if(lista.length == 0){
        alert('Atenção! Não existem crianças na lista.');
        return;
    }

    let resultado = '';
    for(const dado of lista){
        resultado = resultado + `${dado.crianca} - ${dado.idade} idade \n`;
    }
    outResultado.innerText = resultado;

});

form.btnResumirIdade.addEventListener("click", () => {

    if(lista.length == 0){
        alert('Atenção! Não existem crianças na lista.');
        return;
    }

    const copia = lista.sort((a, b) => a.idade - b.idade);
    let nomesGrupoIdade = [];
    let auxIdade = copia[0].idade;

    let resultado = '';

    for(const dado of copia) {
        
        const {crianca, idade} = dado;

        if(idade == auxIdade){
            nomesGrupoIdade.push(crianca)
        } else {
            resultado += `${auxIdade} ano(s): ${nomesGrupoIdade.length} criança(s) - `;
            resultado += ((nomesGrupoIdade.length / copia.length) * 100).toFixed(2) + `% \n`;
            resultado += `(${nomesGrupoIdade.join(', ')}) \n\n`;
            
            auxIdade = idade;
            nomesGrupoIdade = [];
            nomesGrupoIdade.push(crianca);
        }
    }

    resultado += `${auxIdade} ano(s): ${nomesGrupoIdade.length} criança(s) - `;
    resultado += ((nomesGrupoIdade.length / copia.length) * 100).toFixed(2) + `% \n`;
    resultado += `(${nomesGrupoIdade.join(', ')}) \n\n`;

    outResultado.innerText = resultado;
});