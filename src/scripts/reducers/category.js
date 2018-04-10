const INITIAL_STATE = {
  isLoading: false,
  category: null,
  error: null
}

export default function categoryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_CATEGORY_DETAIL_SUCCESS":
      return {
        ...state,
        isLoading: false,
        category: action.res,
        error: null
      }

    case "GET_CATEGORY_DETAIL_FAILURE":
      return {
        ...state,
        isLoading: false,
        category: null,
        error: action.error
      }

    default:
      return state
  }
}
