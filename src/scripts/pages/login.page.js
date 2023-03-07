const login = document.createElement('form')
login.setAttribute("id", "p-login")

const events = () => {
    login.addEventListener('submit', (e) => {
        e.preventDefault()

        const fd = new FormData(login)
        const dados = Object.fromEntries(fd)

        console.log(dados)
    })
}

export const Login = () => {

    login.innerHTML = `

        <label for="username">Usuário</label>
        <input id="username" name="username" type="text" />

        <label for="password">Senha</label>
        <input id="password" name="password" type="password" />
        <div class="input-label-container">
            <label for="salvar">Salvar</label>
            <input name="salvar" id="salvar" type="radio" value="true" />
            <label for="nao-salvar">Não salvar</label>
            <input name="salvar" id="nao-salvar" type="radio" value="false" />
        </div>
        <button id="btn-entrar">Entrar</button>
        <a href="/#404">ERRO</a>

    `

    events()
    return login
}



