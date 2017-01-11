export default function reducer(state = { loading: false, data: [] }, action) {
  switch (action.type) {
  case 'CATEGORIES_LOADED':
    return { success: true, data: action.payload }
  case 'CATEGORIES_LOADING':
    return { ...state, loading: true }
  case 'CATEGORIES_LOAD_FAILURE':
    return { ...state, success: false, error: action.error, loading: false }
  default:
    return state;
  }
}