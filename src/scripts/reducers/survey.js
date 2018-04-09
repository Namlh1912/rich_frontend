const INITIAL_STATE = {
  isLoading: false,
  data: null,
  error: null
}

export default function surveyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_SURVEY_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: { ...action.res },
        error: null
      }

    case "GET_SURVEY_FAILURE":
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
