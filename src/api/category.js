import axios from 'axios';

export function getCategories() {
  return axios.get(' https://library-api-dev.herokuapp.com/api/categories')
    .then((response) => response.data)
}