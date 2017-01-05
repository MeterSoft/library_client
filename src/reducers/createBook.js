export default function reducer(state = [], action) {
  switch (action.type) {
  case 'BOOK_CREATED':
    return action.payload;
  case 'BOOK_CREATE_FAILURE':
    return action.error;
  default:
    return state;
  }
}