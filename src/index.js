import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/configStore';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { routes } from './routes';
import Root from './containers/root'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Root history={history} store={store} routes={routes} />,
  document.getElementById('root')
);