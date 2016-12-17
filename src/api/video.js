import fetch from 'isomorphic-fetch';

export function getVideos() {
  return fetch(' https://library-api-dev.herokuapp.com/api/categories')
    .then((response) => response.json())
}