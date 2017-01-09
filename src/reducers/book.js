export default function reducer(state = { loading: false, data: [] }, action) {
  switch (action.type) {
  case 'BOOKS_LOADED':
    return { success: true, data: action.payload }
  case 'BOOKS_LOADING':
    return { ...state, loading: true }
  case 'BOOKS_LOADING_FAILURE':
    return { success: false, error: action.error }
  default:
    return state;
  }
}