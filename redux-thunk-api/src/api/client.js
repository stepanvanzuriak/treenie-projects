import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net/api/'
})
