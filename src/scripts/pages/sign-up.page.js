import { UserPost } from '../../services/user.service'

const createUser = document.createElement('form')
createUser.setAttribute('id', 'p-sign-up')

const events = () => {
  createUser.addEventListener('submit', e => {
    e.preventDefault()

    const fd = new FormData(createUser)
    const data = Object.fromEntries(fd)

    UserPost(data)
      .then(res => {
        const message = createUser.querySelector('.message')
        if (res.status === 200) {
          window.location.href = '/#login'
        }
        if (res.status === 409) {
          message.innerHTML = res.mensagem
          createUser.reset()
        }
      })
      .catch(err => {
        console.log(err)
      })
  })
}

export const CreateUser = () => {
  createUser.innerHTML = `

    <h1>CONTACT LIST</h1>
    <div class='signup-container'>
    <p>Crie a sua conta</p>

    <div class='container'>
    <label for="name">Nome:</label><br>
    <input id="nome" name="nome" type="text" autofocus />
    </div>

    <div class='container'>
    <label for="email">Email:</label><br>
    <input id="email" name="email" type="email" />
    </div>

    <div class='container'>
    <label for="password">Senha:</label><br>
    <input id="senha" name="senha" type="password" />
    </div>

    <div class='container'>
    <label for="Photo">Adicione uma imagem:</label><br>
    <input id="foto" name="foto" type="file" />
    </div>

    <div class="output"><span class="message"></span></div>

    <button id="btn-signup">Cadastrar</button>
    <p class="toLogin">Já tem uma conta? <a href="/#login">Entre agora</a></p>
    </div>
    `

  events()
  return createUser
}
