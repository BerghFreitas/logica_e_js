const frm = document.querySelector('form')
const resp = document.querySelector('h3') //onde sera eximida a resposta 

frm.addEventListener('submit', (e) =>{

    //const quilo = Number(frm.inQuilo.value)
    const peso = Number(frm.inPeso.value) //obtem conteudo dos campos

    const valor = (15 / 1) * peso
    resp.innerText = `Valor a se pago R$ ${valor.toFixed(2)}`





    e.preventDefault()
})