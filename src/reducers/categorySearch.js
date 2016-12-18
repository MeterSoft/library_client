export default function reducer(state = '', action) {
  switch (action.type) {
  case 'CATEGORY_SEARCH':
    console.log(action.filter);
    return action.filter
  default:
    return state;
  }
}