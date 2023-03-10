import appSettings from '../../appSettings'
const url = `${appSettings.baseURL}/contact`

const token = localStorage.getItem('@token')

const headers = new Headers()
headers.append('Content-Type', 'application/json')
headers.append('Authorization', `Bearer ${token}`)
export const ContactPost = async data => {
  const options = {
    headers,
    body: JSON.stringify(data),
    method: 'POST',
  }
  const res = await fetch(url, options)
  return await res.json()
}

export const ContactList = async data => {
    const options = {
        headers,
       // body: JSON.stringify(data),
        method: 'GET',
    }
    const res = await fetch(url, options)
    return await res.json()
}