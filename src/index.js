import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/configStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { routes } from './routes';
import Root from './containers/root'
import setAuthorizationToken from './api/setAuthorizationToken'
import { setCurrentUser } from './actions/loginActions'

const history = syncHistoryWithStore(browserHistory, store);

if (localStorage.access_token) {
  const { access_token, user } = JSON.parse(localStorage.access_token);
  console.log("localStorage.access_token", access_token);
  store.dispatch(setCurrentUser(user));
  setAuthorizationToken(access_token);
}

ReactDOM.render(
  <Root history={history} store={store} routes={routes} />,
  document.getElementById('root')
);