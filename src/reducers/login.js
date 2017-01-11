export default function reducer(state = {}, action) {
  switch (action.type) {
  case 'LOGIN_SUCCESS':
    return action.payload
  case 'LOGIN_FAILURE':
    return action.error
  default:
    return state;
  }
}