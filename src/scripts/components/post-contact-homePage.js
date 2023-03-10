import { ContactList, ContactPost } from "../../services/contactService"



export const postContact = () => {
  const postContact = document.createElement('form')
  postContact.setAttribute('id', 'e-post-contact')

  postContact.innerHTML = `
    <div class='signup-container'>
      <p>Novo Contato</p>

      <div class='container'>
        <label for="name">Name:</label><br>
        <input id="name" name="nome" type="text" autofocus />
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

    ContactPost(data)
      .then( async (res) => {
        
        if (res.status === 200) {
          
          const contact = await ContactList(data);
          const list = document.querySelector('#list-contact');
          list.innerHTML = ''

          contact.data.map((e)=> {
            const li = document.createElement('li');

            li.innerHTML =  `
                <div class="photo-contact"></div>
                <span class="name-contact">${e.nome}</span>
                <span class="email-contact">${e.id}</span>
                <span class="phone-number-contact"></span>
                <a class="edit-contact">edit</a>
                <div class="delete-contact">&#10005;</div>
            `
            list.appendChild(li)
          })

          console.log(contact);
        }
        if (res.status === 409) {
         
          createUser.reset()
        }
      })
      .catch(err => {
        console.log(err)
      })

    console.log(data)

  })

  return postContact
}