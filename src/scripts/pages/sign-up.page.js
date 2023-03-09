const createUser = document.createElement('form')
createUser.setAttribute('id', 'p-sign-up')

const events = () => {
  createUser.addEventListener('submit', e => {
    e.preventDefault()

    const fd = new FormData(createUser)
    const data = Object.fromEntries(fd)

    console.log(data)

    window.location.href="/#login"

  })
}

export const CreateUser = () => {
  createUser.innerHTML = `

    <h1>CONTACT LIST</h1>
    <div class='signup-container'>
    <p>Crie a sua conta</p>

    <div class='container'>
    <label for="name">Nome:</label><br>
    <input id="name" name="name" type="text" autofocus />
    </div>

    <div class='container'>
    <label for="email">Email:</label><br>
    <input id="email" name="email" type="email" />
    </div>

    <div class='container'>
    <label for="password">Senha:</label><br>
    <input id="password" name="password" type="password" />
    </div>

    <div class='container'>
    <label for="Photo">Adicione uma imagem:</label><br>
    <input id="photo" name="photo" type="file" />
    </div>

    <button id="btn-signup">Cadastrar</button>
    </div>
    `

  events()
  return createUser
}
