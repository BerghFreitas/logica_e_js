const frm = document.querySelector ('form')
const resp = document.querySelector ('#outResp')

frm.addEventListener ('submit', (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const masculino = frm.inMasc.checked

    const altura = Number(frm.inAltura.value)
    const pesoH = 22
    const pesoM = 21
    let peso 
    
    if (masculino) {
        peso = pesoH * Math.pow (altura, 2)
    } else {
        peso = pesoM * Math.pow (altura, 2)
    }    
    resp.innerText = `${nome}: Seu peso ideal é  ${peso.toFixed(3)} Kg`
}    



})