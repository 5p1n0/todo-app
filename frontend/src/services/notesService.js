import axios from "axios"
const baseUrl = 'https://luca.tech-challenges.toduba.it/api/notes'

let token = null

export const setToken = newToken => {
  token = `bearer ${newToken}`
}

export const getAll = async () => {
  if (!window.localStorage.loggedNoteappUser) {return console.error("error, no token")}

  setToken(JSON.parse(window.localStorage.loggedNoteappUser).token)

  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.get(baseUrl, config)
  return response.data
}

export const getNote = async (id) => {
  if (!window.localStorage.loggedNoteappUser) { return console.error("error, no token") }

  setToken(JSON.parse(window.localStorage.loggedNoteappUser).token)

  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.get(`${baseUrl}/${id}`, config)
  return response.data[0]
}

export const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

export const update = async (newObject, id) => {
  if (!window.localStorage.loggedNoteappUser) { return console.error("error, no token") }

  setToken(JSON.parse(window.localStorage.loggedNoteappUser).token)

  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.put(`${baseUrl}/${id}`, newObject, config)
  return response.data
}

export const deleteNote = async (id) => {
  if (!window.localStorage.loggedNoteappUser) { return console.error("error, no token") }

  setToken(JSON.parse(window.localStorage.loggedNoteappUser).token)

  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.status
}