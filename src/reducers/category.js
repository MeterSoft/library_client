export default function reducer(state = [], action) {
  console.log(state, action.type);
  switch (action.type) {
  case 'CATEGORIES_LOADED':
    return action.payload;
  default:
    return state;
  }
}