import callApi from "./api"

export function getAllCategories() {
  return dispatch => {
    callApi(dispatch, "GET_CATEGORIES", `/categories`)
  }
}

export function downloadRate() {
  return dispatch => {
    callApi(dispatch, "GET_RATES", "/rates", {
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

export function submitRate(data, callBack) {
  return dispatch => {
    callApi(dispatch, "SUBMIT_RATE", "/rates", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      },
      type: "json",
      callBack
    })
  }
}

export function editCategory(cate) {
  return dispatch => {
    callApi(dispatch, "EDIT_CATEGORY", "/categories", {
      method: "PATCH",
      body: {
        ...cate
      }
    })
  }
}

export function deleteCategory(id, callBack) {
  return (dispatch, getState) => {
    const state = getState()

    callApi(dispatch, "DELETE_CATEGORY", "/categories/" + id, {
      method: "DELETE",
      body: JSON.stringify({
        id,
        status: false
      }),
      headers: {
        Authorization: `Bearer ${state.auth.token}`,
        "Content-type": "application/json"
      },
      type: "json",
      callBack
    })
  }
}

export function getCategoryDetail(cateId) {
  return dispatch => {
    callApi(dispatch, "GET_CATEGORY_DETAIL", `/categories/${cateId}`)
  }
}

export function createNewCategory(name, callBack) {
  return dispatch => {
    callApi(dispatch, "NEW_CATEGORY", "/categories", {
      method: "POST",
      body: { name },
      callBack
    })
  }
}
