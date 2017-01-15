export default function reducer(state = {}, action) {
  switch (action.type) {
  case 'BOOK_DELETED':
    return action.payload;
  case 'BOOK_DELETE_FAILURE':
    return action.error;
  default:
    return state;
  }
}