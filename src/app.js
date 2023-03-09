import { Login } from './scripts/pages/login.page.js'
import { NotFound } from './scripts/pages/not-found.page.js'
import { CreateUser } from './scripts/pages/sign-up.page.js'
import { Home } from './scripts/pages/home.page.js'

function redirectPage() {
  const root = document.querySelector('#root')

  const Router = {
    '': { component: Login, path: '#login', private: false },
    '#login': { component: Login, path: '#login', private: false },
    '#404': { component: NotFound, path: '#404', private: false },
    '#createUser': {
      component: CreateUser,
      path: '#createUser',
      private: false,
    },
    '#home': { component: Home, path: '#home', private: true },
  }

  const route = Router[window.location.hash] || Router['#404']

  if (route.private) {
    const token = localStorage.getItem('@token')
    if (!token) {
      window.location.href = '/#login'
    }
  }

  root.innerHTML = null
  root.append(route.component())
}

window.addEventListener('load', () => {
  redirectPage()
  window.addEventListener('hashchange', redirectPage)
})
