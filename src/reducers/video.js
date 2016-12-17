export default function reducer(state = [], action) {
  console.log(state, action.type);
  switch (action.type) {
  case 'VIDEOS_LOADED':
    return action.data;
  default:
    return state;
  }
}