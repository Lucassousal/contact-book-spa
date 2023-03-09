import { AuthServices, enterHome } from '../../services/auth.service'

const login = document.createElement('form')
login.setAttribute('id', 'p-login')

const signUpBtn = document.createElement('button')
signUpBtn.setAttribute('type', 'button')
signUpBtn.setAttribute('id', 'btn-cadastrar')

const events = () => {
  login.addEventListener('submit', async e => {
    e.preventDefault()

    const fd = new FormData(login)
    const data = Object.fromEntries(fd)
    const message = login.querySelector('.message')

    enterHome(data)
      .then(res => {
        if (res.status === 200) {
          sessionStorage.setItem('@user', JSON.stringify(res.data))
          localStorage.setItem('@token', res.data.token)
          window.location.href = '/#home'
        }
        if (res.status === 401) {
          message.innerHTML = `${res.mensagem}`
          login.reset()
        }
      })
      .catch(err => {
        console.log(err)
      })
  })

  signUpBtn.addEventListener('click', () => {
    window.location.replace('#createUser')
  })
}

export const Login = () => {
  login.innerHTML = `
        <h1>CONTACT LIST</h1>
        <p>Login to get started</p>
        <input id="username" name="email" type="text" placeholder='user'/>
        <input id="password" name="senha" type="password" placeholder='password'/>
        <div class="input-label-container">
            <label for="salvar">Salvar:</label>
            <input name="salvar" id="salvar" type="checkbox" value="true" />
        </div>
        <div class="container-message">
          <p class='message'></p>
        </div>
        <button type="submit" id="btn-entrar">Entrar</button>
    `

  signUpBtn.innerText = 'Cadastrar'
  login.appendChild(signUpBtn)

  events()
  return login
}
