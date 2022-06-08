import { login, signup } from '../services/usersService'
import { navigate } from 'gatsby'

const isBrowser = typeof window !== `undefined`

const getUser = () => 
  window.localStorage.loggedNoteappUser
    ? JSON.parse(window.localStorage.loggedNoteappUser)
    : {}


const setUser = user => {
  window.localStorage.loggedNoteappUser = JSON.stringify(user)
}

export const handleLogin = async (username, password) => {
  if (!isBrowser) return false

  try {
    const user = await login({ username, password })
    setUser(user)
    navigate('/app/board')
  } catch (exception) {
    console.log("wrong credentials", exception)
  }

}

export const handleSignUp = async (username, password) => {
  if (!isBrowser) return false

  try {
    // todo: validation
    const user = await signup({ username, password })
    navigate('/app/login')
  } catch (exception) {
    console.log("invalid credentials", exception)
  }

}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.username
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

  console.log(`Ensuring the \`loggedNoteappUser\` property exists.`)
  setUser({})
  callback()
}
