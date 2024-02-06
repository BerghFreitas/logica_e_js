const frm = document.querySelector ('form')
const resp = document.querySelector ('#outResp')
const resp2 = document.querySelector ('#outResp2')
const resp3 = document.querySelector ('#outResp3')
const resp4 = document.querySelector ('#outResp3')

frm.addEventListener ('submit', (e) => {
    e.preventDefault()
    const modelo = frm.inModelo.value
    const valor = Number(frm.inPreco.value)
    const ano = Number(frm.inAno.value)
    const cor = frm.inCor.value
    
    if (cor == "azul" || cor == "cinza" ) {
        resp.innerText = `temos essa cor`
    } else {
        resp.innerText = "nao temos essa cor"
    }
    if ((valor >= 5000) || valor <= 8000) {
        resp2.innerText = `temos um carro com esse valor: ${valor}`
    } else {
        resp2.innerText = `nao temos varro nesse ${valor}`
    }
    if (ano == 2010) {
        resp3.innerText = `temos veiculo desse ano`
    } else {
        resp3.innerText = `nao temos esse ano`
    }
    if (modelo == "fusca") {
        resp4.innerText = `temos esso modelo ${modelo}`
    } else {
        resp4.innerText = `nao temos esse modelo ${modelo}`
    }

    

})
