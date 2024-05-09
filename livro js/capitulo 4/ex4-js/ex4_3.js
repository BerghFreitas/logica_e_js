const frm = document.querySelector ('form')
const resp = document.querySelector ('#outResp')

frm.addEventListener ('submit', (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const masculino = frm.inMasc.checked
    const altura = Number(frm.inAltura.value)
    /*const pesoH = 22
    const pesoM = 21
    let peso */
    
    /*if (masculino) {
        const peso = 22 * Math.pow (altura, 2)
        resp.innerText = `${nome}: Seu peso ideal é  ${peso.toFixed(3)} Kg`
    } else {
        const peso = 21 * Math.pow (altura, 2)
        resp.innerText = `${nome}: Seu peso ideal é  ${peso.toFixed(3)} Kg` 
    }    //if e else que foi substituido
    frm.addEventListener ('reset', () => {
        resp.innerText = ""
    }) //faz o evendo de reset agir
})*/ 
const peso = masculino ? 22 * Math.pow (altura,2) : 21 * Math.pow (altura , 2)
resp.innerText = `seu peso ideal é ${peso.toFixed(2)}`
{
    frm.addEventListener ('reset', () => {
        resp.innerText = ""
})
}})