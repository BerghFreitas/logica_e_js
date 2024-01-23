const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener('submit', (e) => {
    const nomeMedicamento = frm.inMedicamento.value
    const preco = Number(frm.inValor.value)
    
    const valorUnidade = preco
    const promocao = (preco * 2)

    resp1.innerText = `Promoçao de ${nomeMedicamento}.`
    resp2.innerText = `leve um por R$: ${valorUnidade.toFixed(2)}`
    resp3.innerText = `leve dois por R$: ${Math.floor(promocao).toFixed(2)}`






e.preventDefault();
})