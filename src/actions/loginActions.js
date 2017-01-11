import {login as _login} from '../api/sessions';
import setAuthorizationToken from '../api/setAuthorizationToken'

export function login(data) {
  return {
    type: 'PROMISE',
    actions: ['LOGINING', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
    promise: _login(data),
  };
}

export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user,
  };
}

export function logout() {
  localStorage.removeItem("access_token");
  setAuthorizationToken(false);
  return {
    type: 'REMOVE_CURRENT_USER',
    user: {}
  };
}