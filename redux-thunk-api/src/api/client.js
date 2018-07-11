import axios from 'axios'
import { MOCK_ENABLE, MOCK_URLS } from '../constants'

export const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net/api/'
})

instance.interceptors.request.use(config => {
  if (MOCK_ENABLE) {
    Object.keys(MOCK_URLS).forEach(url => {
      if (url === config.url) {
        config.url = MOCK_URLS[url]
      }
    })
  }

  return config
})
