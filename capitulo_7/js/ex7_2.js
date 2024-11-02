const form = document.querySelector("form");
const outDica = document.getElementById("outDica");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fruta = form.inFruta.value.toUpperCase();

    console.log(fruta);
    resultado = "";
    for(const letra of fruta){
        if(letra == fruta.charAt(0)){
            resultado += letra;
        } else {
            resultado += " _ ";
        }
    }
    
    outDica.innerText = resultado;
    form.inFruta.value = `${('*').repeat(fruta.length)}`;

    // for(let x=0; x < fruta.length; x++) {
    //     // console.log(fruta.charAt(x));
    //     if(fruta.charAt(0) == fruta.charAt(x)){
    //         resultado += fruta.charAt(x);
    //     } else {
    //         resultado += " _ ";
    //     }
    // }
});