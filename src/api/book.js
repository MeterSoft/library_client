import axios from 'axios';

export function getBooks() {
  return axios.get('https://library-api-dev.herokuapp.com/api/books')
    .then((response) => response.data)
}

export function getBooksByCategory(category_id) {
  const url = `https://library-api-dev.herokuapp.com/api/categories/${category_id}/books`;
  
  return axios.get(url)
    .then((response) => response.data)
}

export function createBook(category_id, params) {
  const url = `https://library-api-dev.herokuapp.com/api/categories/${category_id}/books`;
  const url2 = `http://lvh.me:3001/api/categories/${category_id}/books`;

  const formData  = new FormData();

  formData.append("title", params["title"] || "");
  formData.append("description", params["description"] || "");
  if (params["file"]) formData.append("file", params["file"][0], params["file"][0].name);
  

  return axios.post(url, formData)
          .then((response) => response.data)
          .then((response) => {
            
            if (!response["success"]) {
              throw response["error"]
            }
            return response
          }).catch((error) => {
            throw error.response.data
          });
}