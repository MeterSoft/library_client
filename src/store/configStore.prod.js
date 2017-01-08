import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import promisesMiddleware from '../middlewares/promises';
import * as reducers from '../reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers(reducers);

const enhancer = compose(
  applyMiddleware(thunk, promisesMiddleware),
);
const store = createStore(
  reducer,
  {},
  enhancer,
);

export default store;