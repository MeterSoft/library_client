export default function reducer(state = { isOpen: false, book: {} }, action) {
  switch (action.type) {
  case 'OPEN_BOOK_MODAL':
    return { ...state, isOpen: true, book: action.book }
  case 'CLOSE_BOOK_MODAL':
    return { ...state, isOpen: false }
  default:
    return state;
  }
}