const form = document.querySelector("form");
const outTriangulo = document.getElementById("outTriangulo");
const outTipoTriangulo = document.getElementById("outTipoTriangulo");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const ladoA = Number(form.inLadoA.value);
    const ladoB = Number(form.inLadoB.value);
    const ladoC = Number(form.inLadoC.value);
    let maiorLado = null;
    let meioLado = null;
    let menorLado = null;

    // Verificando qual é o maior lado
    if(ladoA >= ladoB && ladoA >= ladoC){
        maiorLado = ladoA;
        if(ladoB >= ladoC){
            meioLado = ladoB;
            menorLado = ladoC;
        } else {
            meioLado = ladoC;
            menorLado = ladoB;
        }
    }
    if(ladoB >= ladoA && ladoB >= ladoC){
        maiorLado = ladoB;
        if(ladoA >= ladoC){
            meioLado = ladoA;
            menorLado = ladoC;
        } else {
            meioLado = ladoC;
            menorLado = ladoA;
        }
    }
    if(ladoC >= ladoA && ladoC >= ladoB){
        maiorLado = ladoC;
        if(ladoA >= ladoB){
            meioLado = ladoA;
            menorLado = ladoB;
        } else {
            meioLado = ladoB;
            menorLado = ladoA;
        }
    }

    console.log(`Maior Lado: ${maiorLado}`, typeof maiorLado);
    console.log(`Meio Lado: ${meioLado}`, typeof meioLado);
    console.log(`Menor Lado: ${menorLado}`, typeof menorLado);

    const triangulo = maiorLado > (meioLado + menorLado);

    if(triangulo == true){
        outTriangulo.innerText = `Lados NÃO podem formar um triângulo!`;
        outTipoTriangulo.innerText = '';
        return;
    }

    outTriangulo.innerText = `Lados PODEM formar um triângulo!`;

    if(ladoA == ladoB && ladoA == ladoC){
        outTipoTriangulo.innerText = 'Tipo de Triângulo: Equilátero (3 lados iguais)';
    } else if ((ladoA != ladoB && ladoA != ladoC) && ladoB != ladoC){
        outTipoTriangulo.innerText = 'Tipo de Triângulo: Escaleno (3 lados diferentes)';
    } else {
        outTipoTriangulo.innerText = 'Tipo de Triângulo: Isósceles (2 lados iguais)';
    }

});

form.addEventListener("reset", ()=>{
    outTriangulo.innerText = '';
    outTipoTriangulo.innerText = '';
});