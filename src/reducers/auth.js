export default function reducer(state = {isAuthenticated: false, user: {}}, action) {
  switch (action.type) {
  case 'SET_CURRENT_USER':
    return {  
      isAuthenticated: true,
      user: action.user
    }

  case 'REMOVE_CURRENT_USER':
    return {
      isAuthenticated: false,
      user: {}
    }
  default:
    return state;
  }
}