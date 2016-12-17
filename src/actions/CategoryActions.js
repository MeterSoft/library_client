import {getCategories} from '../api/Category';

export function loadCategories() {
  return {
    type: 'PROMISE',
    actions: ['CATEGORIES_LOADING', 'CATEGORIES_LOADED', 'CATEGORIES_LOAD_FAILURE'],
    promise: getCategories(),
  };
}