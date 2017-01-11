import axios from 'axios'
import {DOMAIN} from './domain'

export function login(data) {
  const url = `${DOMAIN}/api/sessions`;

  return axios.post(url, data)
    .then((response) => response.data, 
          (error) => { throw error.response.data }
    );
}