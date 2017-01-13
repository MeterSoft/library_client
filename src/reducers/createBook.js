export default function reducer(state = {}, action) {
  switch (action.type) {
  case 'BOOK_CREATED':
    console.log("action", action);
    return action.payload;
  case 'BOOK_CREATE_FAILURE':
    return action.error;
  default:
    return state;
  }
}