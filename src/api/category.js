import axios from 'axios'
import {DOMAIN} from './domain'

export function getCategories() {
  const url = `${DOMAIN}/api/categories`;
  
  return axios.get(url)
    .then((response) => response.data)
}