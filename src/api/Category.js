import fetch from 'isomorphic-fetch';

export function getCategories() {
  return fetch(' https://library-api-dev.herokuapp.com/api/categories')
    .then((response) => response.json())
}