const INITIAL_STATE = {
  isLoading: false,
  data: null,
  error: null
}

export default function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCT":
    case "EDIT_PRODUCT":
    case "ADD_NEW_PRODUCT":
    case "DELETE_PRODUCT":
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.result,
        error: null
      }

    case "GET_PRODUCT_FAILURE":
    case "DELETE_PRODUCT_FAILURE":
      return {
        ...state,
        isLoading: false,
        data: null,
        error: action.error
      }

    default:
      return state
  }
}
