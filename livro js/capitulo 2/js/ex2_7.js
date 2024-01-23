const frm = document.querySelector('form')
const resp = document.querySelector('#outResp')

frm.addEventListener('submit', (e) => {
    const precoUn = Number(frm.inPrecoUn.value)
    const produto = frm.inProduto.value
    const promocao = (precoUn * 3) / 4

    resp.innerText = `O preço do produto ${produto} ficará R$: ${promocao.toFixed(2)} na promoção L4P3. `



    e.preventDefault()
})