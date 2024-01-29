const frm = document.querySelector('form')
const resp = document.querySelector('#outResp')
frm.addEventListener('submit', (e) =>{
    if(inIdade >= 18){
        const idade = frm.inIdade.value
        resp.innerText = 'pode entrar'
    }else{
        resp.innerText = 'nao pode entrar'
    }
    e.preventDefault()
})