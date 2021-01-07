import Cookies from 'universal-cookie'
const cookies = new Cookies()

const getCookie = () => {
  const token = cookies.get('__abagaussUser')
  return token
}

const removeCookie = () => {
  cookies.remove('__abagaussUser', { path: '/' })
}

const setCookie = (token) => {
  cookies.set('__abagaussUser', token, { path: '/' })
}

const cookie = { getCookie, removeCookie, setCookie }

export default cookie
