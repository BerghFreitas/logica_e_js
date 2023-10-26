// cria referencia ao form e aos elementos h3 e h4
const frm = document.querySelector('form')
const resp1 = document.querySelector('h3')
const resp2 = document.querySelector('h4')

//cria um 'ouvinte' de evento, acionado quando o botao submit for clicado
frm.addEventListener('submit', (e) =>{
    const titulo = frm.inTitulo.value 
    const duracao = Number(frm.inDuracao.value)
    //obtem conteudo dos campos

    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60

    resp1.innerText = titulo
    resp2.innerText = `${horas}horas(s) e ${minutos} minuto(s)`

    e.preventDefault()

})