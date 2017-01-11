export default function reducer(state = {isAuthenticated: false, user: {}}, action) {
  switch (action.type) {
  case 'SET_CURRENT_USER':
    return {  
      isAuthenticated: !!action.user.id,
      user: action.user
    }
  default:
    return state;
  }
}