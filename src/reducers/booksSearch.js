export default function reducer(state = '', action) {
  switch (action.type) {
  case 'BOOKS_SEARCH':
    return action.filter
  default:
    return state;
  }
}