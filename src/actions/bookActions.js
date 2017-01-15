import {getBooks, getBooksByCategory, createBook as _createBook, updateBook as _updateBook, deleteBook as _deleteBook} from '../api/book';

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

export function createBook(params) {
  return {
    type: 'PROMISE',
    actions: ['BOOK_GREATING', 'BOOK_CREATED', 'BOOK_CREATE_FAILURE'],
    promise: _createBook(params),
  };
}

export function updateBook(params) {
  return {
    type: 'PROMISE',
    actions: ['BOOK_UPDATING', 'BOOK_UPDATED', 'BOOK_UPDATE_FAILURE'],
    promise: _updateBook(params),
  };
}

export function openBookModal(book = {}) {
  return {
    type: 'OPEN_BOOK_MODAL',
    book
  };
}

export function closeBookModal() {
  return {
    type: 'CLOSE_BOOK_MODAL',
  };
}

export function deleteBook(params) {
  return {
    type: 'PROMISE',
    actions: ['BOOK_DELETING', 'BOOK_DELETED', 'BOOK_DELETE_FAILURE'],
    promise: _deleteBook(params),
  };
}