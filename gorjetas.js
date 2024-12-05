function somar() {
    const conta = document.getElementById("valor_conta").value;
    const porcentagem = document.getElementById("valor_porcent").value;

    if (porcentagem < 5 || porcentagem > 20) {
        alert('Digite uma porcentagem entre 5% e 20%!');
        return;
    }

    const gorjeta = (conta * porcentagem) / 100;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = `
        <tr>
            <th>Valor total:</th>
            <td>R$ ${(parseFloat(conta) + gorjeta).toFixed(2)}</td>
        </tr>
        <tr>
            <th>Valor da gorjeta:</th>
            <td>R$ ${gorjeta.toFixed(2)}</td>
        </tr>
    `
}

function limpar(){
    conta = document.getElementById("valor_conta").value=''
    porcentagem = document.getElementById("valor_porcent").value=''
    
    const corpoTabela = document.querySelector('tbody td');
    corpoTabela.innerHTML = ''
}