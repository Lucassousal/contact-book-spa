export const userDataElement = () => {
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
      <a id="delete-account-button" href="">Detele account</a>
    </div>
    ` 
  return userData
}