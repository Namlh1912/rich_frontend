const INITIAL_STATE = {
  isLoading: false,
  category: null,
  categories: [],
  error: null
}

export default function categoryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
    case "GET_CATEGORY_DETAIL":
    case "NEW_CATEGORY":
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case "GET_CATEGORIES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        categories: action.result
      }

    case "GET_CATEGORY_DETAIL_SUCCESS":
      return {
        ...state,
        isLoading: false,
        category: action.result,
        error: null
      }

    case "NEW_CATEGORY_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null
      }

    case "GET_CATEGORIES_FAILURE":
      return {
        ...state,
        isLoading: false,
        categories: [],
        error: action.error
      }

    case "GET_CATEGORY_DETAIL_FAILURE":
      return {
        ...state,
        isLoading: false,
        category: null,
        error: action.error
      }

    case "NEW_CATEGORY_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}
