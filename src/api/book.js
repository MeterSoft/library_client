import axios from 'axios'
import {DOMAIN} from './domain'
import _ from 'lodash'

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

function buildPostParams(params) {
  const formData = new FormData();
  const file = params.file;
  delete params.file;
  _.forEach(_.keys(params), (key) => {
    formData.append(key, params[key]);
  });
  if (file) formData.append("file", file[0], file[0].name);

  return formData;
}

export function createBook(params) {
  const { category_id } = params;
  const url = `${DOMAIN}/api/categories/${category_id}/books`;

  return axios.post(url, buildPostParams(params))
          .then((response) => response.data)
          .catch((error) => { throw error.response.data.error })
}

export function updateBook(params) {
  const { category_id, id } = params;
  const url = `${DOMAIN}/api/categories/${category_id}/books/${id}`;

  return axios.put(url, buildPostParams(params))
          .then((response) => response.data)
          .catch((error) => { throw error.response.data.error })
}