


export const contactList = () => {
  const contactList = document.createElement('form')
  contactList.setAttribute('id', 'e-contact-list')

  contactList.innerHTML = `
      <input type="search" name="search-contact" id="search-contact" placeholder="search...">
      <ul id="list-contact">
        <!-- <li>
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
        </li> -->
      </ul>
    ` 
  return contactList
}