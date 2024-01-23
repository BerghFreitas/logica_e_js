const frm = document.querySelector('form')
const resp2 = document.querySelector('#outValorCobrado')
const resp1 = document.querySelector('#outTempoUsado')


frm.addEventListener('submit', (e) =>{
    const valorCobrado  = (Number(frm.inValorPorTempo.value))
    const tempoGasto = Number(frm.inTempoGasto.value)
    const total = Math.ceil(tempoGasto / 15) * valorCobrado
    

    resp1.innerText = `o cliente usou ${Math.floor(tempoGasto / 60)} hora(s) ${tempoGasto % 60} minutos.`
    //resp1.innerText = ('o cliente usou ' + Math.floor(tempoGasto /60) + 'hora(s) ' + (tempoGasto % 60 ) + 'minutos. ')
    resp2.innerText = `o valor a ser pago é R$: ${(total)}`







    e.preventDefault()
})

