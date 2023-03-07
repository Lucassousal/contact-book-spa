const notFound = document.createElement('div')
notFound.setAttribute("id", "p-not-found")

const SECONDS_TO_REDIRECT = 10
let secondsToRedirect = SECONDS_TO_REDIRECT
let interval = null

const clear = () => {
    secondsToRedirect = SECONDS_TO_REDIRECT
    clearInterval(interval)
}

const contador = () => {
    const em = notFound.querySelector('em')

    clearInterval(interval)

    interval = setInterval(() => {
        em.innerHTML = --secondsToRedirect
        console.log(secondsToRedirect);

        if(secondsToRedirect === 0) {
            clear()
            window.location.href = "/#login"
        }
    }, 1000)
}

const ancora = () => {
    const anchor = notFound.querySelector('a')
    anchor.addEventListener('click', clear)
}

const events = () => {
    contador()
    ancora()
}

export const NotFound = () => {
    notFound.innerHTML = `
        <img src="https://static.vecteezy.com/system/resources/previews/003/067/848/original/cartoon-sad-smile-face-emoticon-icon-in-flat-style-free-vector.jpg">
        <h1>404</h1>
        <p>Essa página não existe</p>
        <span>Você será redirecionado automaticamente em: <em>${secondsToRedirect}</em></span>
        <a href="/#login">Voltar ao início</a>
    `

    events()
    return notFound
}
