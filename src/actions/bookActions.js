import {getBooks, getBooksByCategory} from '../api/book';

export function loadBooks() {
  return {
    type: 'PROMISE',
    actions: ['BOOKS_LOADING', 'BOOKS_LOADED', 'BOOKS_LOAD_FAILURE'],
    promise: getBooks(),
  };
}

export function loadBooksByCategory(category_id) {
  return {
    type: 'PROMISE',
    actions: ['BOOKS_LOADING', 'BOOKS_LOADED', 'BOOKS_LOAD_FAILURE'],
    promise: getBooksByCategory(category_id),
  };
}

export function booksSearch(filter) {
  return {
    type: 'BOOKS_SEARCH',
    filter,
  };
}