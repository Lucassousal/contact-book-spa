import appSettings from '../../appSettings'
const url = `${appSettings.baseURL}/auth`

const headers = new Headers()
headers.append('Content-Type', 'application/json')

export const enterHome = async data => {
  const options = {
    headers,
    body: JSON.stringify(data),
    method: 'POST',
  }
  const res = await fetch(url, options)
  return await res.json()
}
