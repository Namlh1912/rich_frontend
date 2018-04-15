import callApi from "./api"

export function getAllSurveys() {
  return dispatch => {
    callApi(dispatch, "GET_SURVEYS", "/surveys")
  }
}

export function downloadSurveyDetail() {
  return dispatch => {
    callApi(dispatch, "GET_SURVEY_RECORD", "/surveys-detail", {
      callBack: text => {
        const filename = "export.csv"
        const data = encodeURI("data:text/csv;charset=utf-8," + text)
        const link = document.createElement("a")
        link.setAttribute("href", data)
        link.setAttribute("download", filename)
        link.click()
      },
      resType: "text"
    })
  }
}

export function submitSurvey(data, callBack) {
  return dispatch => {
    callApi(dispatch, "SUBMIT_SURVEY", "/surveys-detail", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      type: "json",
      callBack
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
