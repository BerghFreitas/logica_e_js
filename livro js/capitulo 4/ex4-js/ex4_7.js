var frm = document.querySelector('form')
var resp1 = document.querySelector('#outResp1')
var resp2 = document.querySelector('#outResp2')
var resp3 = document.querySelector('#outResp3')

frm.addEventListener ('submit', (e) =>{
    e.preventDefault()
    const saque = Number(frm.inSaque.value)
    if (saque %10 != 0){
        alert('valor invalido para as notas disponiveis (10, 50, 100)')
        frm.inSaque.focus()
        return
    }
    const notasCem = Math.floor(saque / 100)
    let resto = saque % 100
    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50

    const notasDez = Math.floor(resto / 10)
    if (notasCem > 0) {
        resp1.innerText = `notas de 100 : ${notasCem}`
    } 
    if (notasCinquenta > 0) {
        resp2.innerText = `notas de 50 : ${notasCinquenta}`
    } 
    if (notasDez > 0) {
        resp3.innerText = `notas de 10 : ${notasDez}`
    }
})