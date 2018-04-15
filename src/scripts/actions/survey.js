import callApi from "./api"

export function getAllSurveys() {
  return dispatch => {
    callApi(dispatch, "GET_SURVEYS", "/surveys")
  }
}

export function submitSurvey(data) {
  return dispatch => {
    callApi(dispatch, "SUBMIT_SURVEY", "/surveys-detail", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      type: "json"
    })
  }
}

export function addNewSurvey(data) {
  return (dispatch, getState) => {
    const state = getState()

    callApi(dispatch, "ADD_NEW_SURVEY", "/surveys", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${state.auth.token}`,
        "Content-Type": "application/json"
      },
      type: "json"
    })
  }
}

export function editSurvey(data) {
  return (dispatch, getState) => {
    const state = getState()

    callApi(dispatch, "EDIT_SURVEY", "/surveys", {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${state.auth.token}`,
        "Content-Type": "application/json"
      },
      type: "json"
    })
  }
}

export function getSurvey(id) {
  return dispatch => {
    callApi(dispatch, "GET_SURVEY_DETAIL", "/surveys/" + id)
  }
}
