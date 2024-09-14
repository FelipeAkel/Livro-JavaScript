const form = document.querySelector("form");
const outFusoBrasil = document.getElementById("outFusoBrasil");
const outFusoInternacional = document.getElementById("outFusoInternacional");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const horario = Number(form.inHorario.value);
    // Fuso Brasil
    let fernandoNoronha = horario + 1;
    let amazonas = horario - 1;
    let acre = horario - 2;

    if(fernandoNoronha >= 24) {
        fernandoNoronha = fernandoNoronha - 24;
    }
    if(amazonas < 0) {
        amazonas = Math.abs(amazonas);
    }
    if(acre < 0) {
        acre = Math.abs(acre);
    }

    outFusoBrasil.innerText = `
        Fusos Horários, Brasíl: \n
        - Fernando de Noronha: ${fernandoNoronha.toFixed(2)}
        - Brasília: ${horario.toFixed(2)}
        - Amazonas: ${amazonas.toFixed(2)}
        - Acre: ${acre.toFixed(2)}
    `;

    // Fuso Internacional
    let novaIorque = horario - 1;
    let franca = horario + 5;
    let japao = horario + 12;

    if(novaIorque < 0) {
        novaIorque = Math.abs(novaIorque);
    }
    if(franca >= 24) {
        franca = franca - 24;
    }
    if(japao >= 24) {
        japao = japao - 24;
    }

    outFusoInternacional.innerText = `
        Fusos Internacionais: \n
        - Nova Iorque: ${novaIorque.toFixed(2)}
        - França: ${franca.toFixed(2)}
        - Japão: ${japao.toFixed(2)}
    `;
});