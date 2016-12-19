import fetch from 'isomorphic-fetch';

export function getBooks() {
  return fetch(' https://library-api-dev.herokuapp.com/api/books')
    .then((response) => response.json())
}

export function getBooksByCategory(category_id) {
  const url = `https://library-api-dev.herokuapp.com/api/categories/${category_id}/books`;
  
  return fetch(url)
    .then((response) => response.json())
}