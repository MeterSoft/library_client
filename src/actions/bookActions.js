import {getBooks, getBooksByCategory, createBook as _createBook} from '../api/book';

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

export function createBook(category_id, params) {
  return {
    type: 'PROMISE',
    actions: ['BOOK_GREATING', 'BOOK_CREATED', 'BOOK_CREATE_FAILURE'],
    promise: _createBook(category_id, params),
  };
}

