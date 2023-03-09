const home = document.createElement('div')
home.setAttribute('id', 'p-home')

const appContainer = document.createElement('div')
appContainer.setAttribute('id', 'app-container')

const appContainerLeft = document.createElement('div')
appContainerLeft.setAttribute('id', 'app-container-left')

const appContainerRight = document.createElement('div')
appContainerRight.setAttribute('id', 'app-container-right')

// const events = () => {
//   home.addEventListener('submit', e => {
//     e.preventDefault()

//     const fd = new FormData(createUser)
//     const data = Object.fromEntries(fd)

//     console.log(data)
//   })
// }

const navBarElement = () => {
  const navbar = document.createElement('nav')
  navbar.setAttribute('id', 'e-nav')

  navbar.innerHTML = `
    <div class="nav-container">
      <span class="welcome-text">
        Bem Vindo
      </span>
      <div class="close-button">
        <span>&#10005;</span>
      </div>
    </div>
    `
  return navbar
}

const userDataElement = () => {
  const userData = document.createElement('div')
  userData.setAttribute('id', 'e-user-data')

  userData.innerHTML = `
    <div class="top-user-data">
      <div id="photo-user"></div>
      <button id="edit-profile-button">Editar perfil</button>
    </div>
    <div class="end-user-data">
      <p id="use-name">fulano beltrano</p>
      <p id="user-e-mail">fulano beltrano</p>
      <a id="delete-account-button" href="">Deletar conta</a>
    </div>
    `
  return userData
}

const postContact = () => {
  const postContact = document.createElement('form')
  postContact.setAttribute('id', 'e-post-contact')

  postContact.innerHTML = `
    <div class='signup-container'>
      <p>Novo Contato</p>

      <div class='container'>
        <label for="name">Nome:</label><br>
        <input id="name" name="name" type="text" autofocus />
      </div>

      <div class='container'>
        <label for="phone">Telefone:</label><br>
        <input id="phone" name="phone" type="tel" />
      </div>

      <div class='container'>
        <label for="email">Email:</label><br>
        <input id="email" name="email" type="email" />
      </div>


      <div class='container'>
        <label for="Photo">Adicione uma imagem:</label><br>
        <input id="photo" name="photo" type="file" />
      </div>

      <button id="btn-signup">Salvar</button>
    </div>
    `
  return postContact
}

const contactList = () => {
  const contactList = document.createElement('form')
  contactList.setAttribute('id', 'e-contact-list')

  contactList.innerHTML = `
      <input type="search" name="search-contact" id="search-contact" placeholder="search...">
      <ul id="list-contact">
        <li>
          <div class="photo-contact"></div>
          <span class="name-contact">beltrano filho</span>
          <span class="email-contact">beltranof@gmail.com</span>
          <span class="phone-number-contact">(85) 98520-0352</span>
          <a class="edit-contact">edit</a>
          <div class="delete-contact">&#10005;</div>
        </li>
        <li>
          <div class="photo-contact"></div>
          <span class="name-contact">beltrano filho</span>
          <span class="email-contact">beltranof@gmail.com</span>
          <span class="phone-number-contact">(85) 98520-0352</span>
          <a class="edit-contact">edit</a>
          <div class="delete-contact">&#10005;</div>
        </li>
      </ul>
    `
  return contactList
}

export const Home = () => {
  home.innerHTML = ''

  appContainerLeft.appendChild(userDataElement())
  appContainerLeft.appendChild(postContact())
  appContainerRight.appendChild(contactList())
  appContainer.appendChild(appContainerLeft)
  appContainer.appendChild(appContainerRight)
  home.appendChild(navBarElement())
  home.appendChild(appContainer)

  // events()
  return home
}
