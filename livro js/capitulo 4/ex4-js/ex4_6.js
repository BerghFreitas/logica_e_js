var frm = document.querySelector('form')
var resp = document.querySelector('#outResp')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
var numero = Number(frm.inNumero.value)
var raiz = Math.sqrt(numero)

if (Number.isInteger(raiz)){
resp.innerText = `Raiz : ${raiz}`
}else {
    resp.innerText = `nao ha raiz exata para o numero ${numero}`
}
})