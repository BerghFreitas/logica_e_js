//cria referencia ao form e ao elemento h3(onde sera exibido a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um 'ouvinte' de evento, acionado quando o botao submit for clicado
frm.addEventListener("submit", (e) =>{
const nome = frm.inNome.value //obtem o nome digitado no form
resp.innerText = `Olá ${nome}` //exibe a resposta do programa
e.preventDefault() //evita o envio do formulario
})


var n = 10 / 2 * Math.sqrt(9) - 4
console.log(n)


