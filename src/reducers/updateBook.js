export default function reducer(state = {}, action) {
  switch (action.type) {
  case 'BOOK_UPDATED':
    return action.payload;
  case 'BOOK_UPDATE_FAILURE':
    return action.error;
  default:
    return state;
  }
}