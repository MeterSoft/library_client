import fetch from 'isomorphic-fetch';

export function getBooks() {
  return fetch('https://library-api-dev.herokuapp.com/api/books')
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

  formData.append("title", params["title"] || "");
  formData.append("description", params["description"] || "");
  if (params["file"]) formData.append("file", params["file"][0], params["file"][0].name);
  
  return fetch(url, {
      method: 'post',  
      body:  formData,
  }).then((response) => response.json())
    .then((response) => {
      if (!response["success"]) {
        throw response["error"]
      }
      return response;
    });
}