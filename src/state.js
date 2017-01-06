import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import promisesMiddleware from './middlewares/promises';
import * as reducers from './reducers';
import devTools from './containers/devTools';
import thunk from 'redux-thunk';

const reducer = combineReducers(reducers);
const logger = createLogger();

const enhancer = compose(
  applyMiddleware(thunk, promisesMiddleware, logger),
  devTools.instrument(),
);
const store = createStore(
  reducer,
  {},
  enhancer,
);

export default store;