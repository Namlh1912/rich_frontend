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
    case "EDIT_CATEGORY":
    case "SUBMIT_RATE":
    case "GET_RATES":
    case "DELETE_CATEGORY":
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case "DELETE_CATEGORY_SUCCESS":
    case "EDIT_CATEGORY_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
        category: null
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
    case "SUBMIT_RATE_SUCCESS":
    case "GET_RATES_SUCCESS":
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

    case "DELETE_CATEGORY_FAILURE":
    case "EDIT_CATEGORY_FAILURE":
    case "NEW_CATEGORY_FAILURE":
    case "SUBMIT_RATE_FAILURE":
    case "GET_RATES_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}
