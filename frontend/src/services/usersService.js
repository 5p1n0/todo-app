import axios from 'axios'

export const login = async credentials => {
  const response = await axios.post('https://luca.tech-challenges.toduba.it/api/login', credentials)
  return response.data
}

export const signup = async credentials =>{
  const response = await axios.post(`https://luca.tech-challenges.toduba.it/api/users`, credentials)
  return response.data
}