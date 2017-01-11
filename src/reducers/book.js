export default function reducer(state = { loading: false, data: [] }, action) {
  switch (action.type) {
  case 'BOOKS_LOADED':
    return { success: true, data: action.payload }
  case 'BOOKS_LOADING':
    return { ...state, loading: true }
  case 'BOOKS_LOAD_FAILURE':
    return { ...state, success: false, error: action.error, loading: false }
  default:
    return state;
  }
}