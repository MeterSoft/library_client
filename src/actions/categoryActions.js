import {getCategories} from '../api/category';

export function loadCategories() {
  return {
    type: 'PROMISE',
    actions: ['CATEGORIES_LOADING', 'CATEGORIES_LOADED', 'CATEGORIES_LOAD_FAILURE'],
    promise: getCategories(),
  };
}

export function categorySearch(filter) {
  return {
    type: 'CATEGORY_SEARCH',
    filter,
  };
}