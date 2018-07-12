import axios from 'axios';
import { MOCK_ENABLE, MOCK_URLS } from '../constants';
/* eslint-disable import/prefer-default-export */
export const instance = axios.create({
  baseURL: 'https://fakerestapi.azurewebsites.net/api/'
});
/* eslint-enable */

/* eslint-disable no-param-reassign */
instance.interceptors.request.use(config => {
  if (MOCK_ENABLE) {
    Object.keys(MOCK_URLS).forEach(url => {
      if (url === config.url) {
        config.url = MOCK_URLS[url];
        config.method = 'get';
      }
    });
  }

  return config;
});
/* eslint-enable */
