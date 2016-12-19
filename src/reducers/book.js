export default function reducer(state = [], action) {
  switch (action.type) {
  case 'BOOKS_LOADED':
    return action.payload;
  default:
    return state;
  }
}