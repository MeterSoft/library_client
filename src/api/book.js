import fetch from 'isomorphic-fetch';
import { SubmissionError } from 'redux-form'

export function getBooks() {
  return fetch(' https://library-api-dev.herokuapp.com/api/books')
    .then((response) => response.json())
}

export function getBooksByCategory(category_id) {
  const url = `https://library-api-dev.herokuapp.com/api/categories/${category_id}/books`;
  
  return fetch(url)
    .then((response) => response.json())
}

export function createBook(category_id, params) {
  const url = `https://library-api-dev.herokuapp.com/api/categories/${category_id}/books`;
  // const url2 = `http://lvh.me:3001/api/categories/${category_id}/books`;

  const formData  = new FormData();

  formData.append("file", params["file"]);
  formData.append( "json", JSON.stringify({ title: params["title"], description: params["description"] }) );

  return fetch(url, {
      type: 'no-cors',
      method: 'post',  
      headers: {  
        // "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Content-type": "application/json; charset=UTF-8",
      }, 
      body:  JSON.stringify(params),
  }).then((response) => response.json())
    .then((response) => {
      if (!response["success"]) {
        throw new SubmissionError({ username: 'User does not exist', _error: 'Login failed!' })
      }
      return response;
    });
}