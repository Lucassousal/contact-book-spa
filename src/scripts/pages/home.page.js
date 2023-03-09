import { navBarElement } from "../components/nav-bar-homePage"
import { userDataElement } from "../components/user-data-homePage"
import { postContact } from "../components/post-contact-homePage"
import { contactList } from "../components/contact-list-homePage"

const home = document.createElement('div')
home.setAttribute('id', 'p-home')

const appContainer = document.createElement('div')
appContainer.setAttribute('id', 'app-container')

const appContainerLeft = document.createElement('div')
appContainerLeft.setAttribute('id', 'app-container-left')

const appContainerRight = document.createElement('div')
appContainerRight.setAttribute('id', 'app-container-right')

// const events = () => {
//   setTimeout(()=>{
//     
//     })
//   },1000)
// }



export const Home = () => {
  
  if(home.innerHTML == ""){
       
    appContainerLeft.appendChild(userDataElement())
    appContainerLeft.appendChild(postContact())
    appContainerRight.appendChild(contactList())
    appContainer.appendChild(appContainerLeft)
    appContainer.appendChild(appContainerRight)
    home.appendChild(navBarElement()) 
    home.appendChild(appContainer)
  
  }

  // events()
  return home
}
