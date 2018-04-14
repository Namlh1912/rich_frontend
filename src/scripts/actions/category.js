import callApi from "./api"

export function getAllCategories() {
  return dispatch => {
    callApi(dispatch, "GET_CATEGORIES", `/categories`)
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

export function getCategoryDetail(cateId) {
  return dispatch => {
    callApi(dispatch, "GET_CATEGORY_DETAIL", `/categories/${cateId}`)
  }
}

export function createNewCategory(name) {
  return dispatch => {
    callApi(dispatch, "NEW_CATEGORY", "/categories", {
      method: "POST",
      body: { name }
    })
  }
}
