const frm = document.querySelector ('form')
const resp = document.querySelector ('#outResp')

frm.addEventListener ('submit', (e) => {
    e.preventDefault()

    
    const cor = frm.inCor.value
    if (cor ==  ("azul" || "cinza") ) {
        resp.innerText = `temos essa cor ${cor}`
        resp.style.color = "blue"
    } else {
        resp.innerText = `nao temos a cor ${cor}`
    }

    





    

})
