const INITIAL_STATE = {
  isLoading: false,
  surveys: [],
  survey: null,
  error: null
}

export default function surveyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "GET_SURVEY_DETAIL":
    case "GET_SURVEYS":
    case "ADD_NEW_SURVEY":
      return {
        ...state,
        isLoading: true,
        error: null
      }

    case "GET_SURVEY_DETAIL_SUCCESS":
      return {
        ...state,
        isLoading: false,
        survey: action.result,
        error: null
      }

    case "GET_SURVEY_DETAIL_FAILURE":
      return {
        ...state,
        isLoading: false,
        survey: null,
        error: action.error
      }

    case "GET_SURVEYS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        surveys: action.result,
        error: null
      }

    case "GET_SURVEYS_FAILURE":
      return {
        ...state,
        isLoading: false,
        surveys: [],
        error: action.error
      }
    case "ADD_NEW_SURVEY_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}
