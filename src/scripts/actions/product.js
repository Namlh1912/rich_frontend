import callApi from "./api"

export function getProduct(id) {
  return dispatch => {
    callApi(dispatch, "GET_PRODUCT", "/products/" + id)
  }
}

export function editProduct(data) {
  return dispatch => {
    callApi(dispatch, "EDIT_PRODUCT", "/products/" + data.id, {
      method: "PUT",
      body: data
    })
  }
}

export function deleteProduct(id) {
  return (dispatch, getState) => {
    const state = getState()

    callApi(dispatch, "DELETE_PRODUCT", "/products/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${state.auth.token}`
      }
    })
  }
}

export function addNewProduct(product) {
  return (dispatch, getState) => {
    const state = getState()

    callApi(dispatch, "ADD_NEW_PRODUCT", "/products/", {
      method: "POST",
      body: product,
      headers: {
        Authorization: `Bearer ${state.auth.token}`
      }
    })
  }
}
