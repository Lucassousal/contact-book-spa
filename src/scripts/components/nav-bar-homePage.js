export const navBarElement = () => {
  const navContainer = document.createElement('div')
  navContainer.setAttribute('class', 'nav-container')
  navContainer.innerHTML = `
    <span class="welcome-text">
      Bem Vindo
    </span>
    `

  const closeButton = document.createElement('div')
  closeButton.setAttribute('class', 'close-button')
  closeButton.innerHTML = `
    <span>&#10005;</span> 
    `
  closeButton.addEventListener('click', () => {
    window.location.href = '/#login'
  })


  const navbar = document.createElement('nav')
  navbar.setAttribute('id', 'e-nav')

  navContainer.appendChild(closeButton)
  navbar.appendChild(navContainer)

  return navbar
}