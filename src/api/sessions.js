import axios from 'axios';

export function login(data) {
  return axios.post('https://library-api-dev.herokuapp.com/api/sessions', data)
    .then((response) => response.data, 
          (error) => { throw error.response.data }
    );
}