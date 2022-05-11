
const app = document.getElementById('form')
const nome = document.getElementById('usr-name')
const email = document.getElementById('email')
const senha = document.getElementById('password')
const senha2 = document.getElementById('password2')

// Mostra 'input' com mensagem de erro
function mostraErro(input, message) {
    const controle = input.parentElement
    controle.className = 'form-control error'
    const small = controle.querySelector('small')
    small.innerText = message
}

// Mostra sucesso
function mostraAprovado(input) {
    const controle = input.parentElement
    controle.className = 'form-control success'
}

// Checar email se é valido
function checaEmail(email) {
    const ck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return ck.test(String(email).toLocaleLowerCase())
}

// Evento para escuta
app.addEventListener('submit', (evento) => {
    evento.preventDefault()

    if (nome.value === '') {
        mostraErro(nome, 'Preencha o nome')
    } else {
        mostraAprovado(nome)
    }

    if (email.value === '') {
        mostraErro(email, 'Preencha o e-mail')
    } else if (!checaEmail(email.value)) {
        mostraErro(email, 'O e-mail é inválido')
    } else {
        mostraAprovado(email)
    }

    if (senha.value === '') {
        mostraErro(senha, 'Preencha a senha')
    } else {
        mostraAprovado(senha)
    }

    if (senha2.value === '') {
        mostraErro(senha2, 'Senha não confere')
    } else {
        mostraAprovado(senha2)
    }

})
