export const postContact = () => {
  const postContact = document.createElement('form')
  postContact.setAttribute('id', 'e-post-contact')

  postContact.innerHTML = `
    <div class='signup-container'>
      <p>Novo Contato</p>

      <div class='container'>
        <label for="name">Name:</label><br>
        <input id="name" name="name" type="text" autofocus />
      </div>

      <div class='container'>
        <label for="phone">Phone number:</label><br>
        <input id="phone" name="phone" type="tel" />
      </div>

      <div class='container'>
        <label for="email">Email:</label><br>
        <input id="email" name="email" type="email" />
      </div>


      <div class='container'>
        <label for="Photo">Photo:</label><br>
        <input id="photo" name="photo" type="file" />
      </div>

      <button id="btn-signup">Salvar</button>
    </div>
    ` 
  postContact.addEventListener('submit', e => {
    e.preventDefault()

    const fd = new FormData(postContact)
    const data = Object.fromEntries(fd)

    console.log(data)

  })

  return postContact
}