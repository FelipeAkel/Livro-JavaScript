
function iniciarPrograma() {
    alert('Lembrando! Digite 0 "Zero" ou "algo diferente de número" para sair do loop!');

    do {
        const num = Number(prompt("Digite o número: "));
        if(num === 0 || isNaN(num)){
            const sair = confirm('Deseja Sair?')
            if (sair === true) {
                break;
            } else {
                continue;
            }
        }

        if(num % 2 == 0) {
            alert(`O dobro de ${num} é ${num * 2}`);
        } else {
            alert(`O triplo de ${num} é ${num * 3}`);
        }

    } while (true)

    alert('Bye...');

}
