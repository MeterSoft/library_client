export default function reducer(state = '', action) {
  switch (action.type) {
  case 'CATEGORY_SEARCH':
    return action.filter
  default:
    return state;
  }
}