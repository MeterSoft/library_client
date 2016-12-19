export default function reducer(state = [], action) {
  switch (action.type) {
  case 'CATEGORIES_LOADED':
    return action.payload;
  default:
    return state;
  }
}