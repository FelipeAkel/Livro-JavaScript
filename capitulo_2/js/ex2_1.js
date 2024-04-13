// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const form = document.querySelector("form");
const resp = document.getElementById("resultado"); // id="resultado"
// const resp = document.querySelector("#resultado"); // id="resultado"
// const resp = document.querySelector(".resultado"); // class="resultado"
// const resp = document.querySelector("h3"); // primeiro elemento h3 da página

// Cria um "ouvinte" de evento, acionado quando o submit for clicado
form.addEventListener("submit", (e) => {
    const nome = form.inNome.value; // Obtém o nome digitado no form
    resp.innerText = `Olá ${nome}`; // Exibe resposta

    e.preventDefault(); // Evita o envio do form
});
