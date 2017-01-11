import axios from 'axios'
import {DOMAIN} from './domain'

export function getBooks() {
  const url = `${DOMAIN}/api/books`;

  return axios.get(url)
    .then((response) => response.data)
}

export function getBooksByCategory(category_id) {
  const url = `${DOMAIN}/api/categories/${category_id}/books`;
  
  return axios.get(url)
    .then((response) => response.data)
}

export function createBook(params) {
  const { category_id } = params;

  const url = `${DOMAIN}/api/categories/${category_id}/books`;

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