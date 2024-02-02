const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
frm.addEventListener('submit', (e) => {   
    e.preventDefault()  
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)
    const media = (nota1 + nota2) / 2
    resp1.innerText = `Média das notas: ${media.toFixed(2)}.`

    if (media >= 7) {
        resp2.innerText = `Parabens ${nome}! vovê foi aprovado(a)!`
        resp2.style.color = 'blue'
        } else if (media >= 4) {
        resp2.innerText = `atenção ${nome}, você está em exame!`
        resp2.style.color = "green"
        } else {
            resp2.innerText = `Ops! ${nome} você foi reprovado!`
            resp2.style.color = "red"
        }
})