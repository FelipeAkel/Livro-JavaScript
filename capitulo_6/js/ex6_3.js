const form = document.querySelector("form");
const outResultado = document.getElementById("outResultado");

const modelos = [];
let listaResultado = "";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const modelo = form.inModelo.value;
    const preco = Number(form.inPreco.value);

    modelos.push({ modelo: modelo, preco: preco });
    
    form.inModelo.value = "";
    form.inPreco.value = "";
    form.inModelo.focus();

    form.btnListarModelos.dispatchEvent(new Event("click"));
});

form.btnListarModelos.addEventListener("click", () => {
    
    if(modelos.length == 0) {
        alert('Atenção! Não existem Modelos cadastrados.');
        return;
    }

    listaResultado = `Lista dos Carros Cadastrados\n${('-').repeat(50)}\n`;
    for(const lista of modelos) {
        listaResultado = listaResultado + `${lista.modelo} - R$: ${lista.preco.toFixed(2)} \n`
    }
    
    outResultado.innerText = listaResultado;
});

form.btnFiltrarPreco.addEventListener("click", () => {
    const valorFiltro = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"));

    if(valorFiltro == 0 || isNaN(valorFiltro)) {
        return;
    }

    const modelosFiltrados = modelos.filter(modelos => modelos.preco <= valorFiltro);

    if(modelosFiltrados.length == 0) {
        alert(`Não há modelos de veículos com preço menor que R$: ${valorFiltro.toFixed(2)}.`);
        return;
    }

    listaResultado = `Lista dos Carros Cadastrados Filtrados com Preço até R$: ${valorFiltro.toFixed(2)}\n${('-').repeat(50)}\n`;
    for(const lista of modelosFiltrados) {
        listaResultado = listaResultado + `${lista.modelo} - R$: ${lista.preco.toFixed(2)} \n`
    }

    outResultado.innerText = listaResultado;
    
});

form.btnSimularPromocao.addEventListener("click", () => {

    const promocao = Number(prompt("Qual o percentual de desconto até 100(%): "));
    
    if(promocao <= 0 || promocao >= 100 || isNaN(promocao)) {
        return;
    }
    
    const modelosPromocao = modelos.map(aux => ({
        modelo: aux.modelo, 
        preco: aux.preco - ((aux.preco * promocao) / 100),
    }));

    listaResultado = `Lista dos Carros Cadastrados com Promoção de ${promocao}% \n ${('-').repeat(50)}\n`;
    for(const lista of modelosPromocao) {
        listaResultado = listaResultado + `${lista.modelo} - R$: ${lista.preco.toFixed(2)} \n`;
    }

    outResultado.innerText = listaResultado;

});