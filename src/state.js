import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import promisesMiddleware from './middlewares/promises'
import * as reducers from './reducers';
import devTools from './containers/devTools';

const reducer = combineReducers(reducers);
const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(promisesMiddleware, logger),
  devTools.instrument()
);

export default store;