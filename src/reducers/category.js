export default function reducer(state = { loading: false, data: [] }, action) {
  switch (action.type) {
  case 'CATEGORIES_LOADED':
    return { success: true, data: action.payload }
  case 'CATEGORIES_LOADING':
    return { ...state, loading: true }
  case 'CATEGORIES_LOADIND_FAILURE':
    return { success: false, error: action.error }
  default:
    return state;
  }
}