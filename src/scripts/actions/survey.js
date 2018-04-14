import callApi from "./api"

export function getAllSurveys() {
  return dispatch => {
    callApi(dispatch, "GET_SURVEYS", "/surveys")
  }
}

export function addNewSurvey(data) {
  return dispatch => {
    callApi(dispatch, "ADD_NEW_SURVEY", "/surveys", {
      method: "POST",
      body: data
    })
  }
}

export function getSurvey(id) {
  return dispatch => {
    callApi(dispatch, "GET_SURVEY_DETAIL", "/survey/" + id)
  }
}
