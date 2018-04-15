import callApi from "./api"

export function getProduct(id) {
  return dispatch => {
    callApi(dispatch, "GET_PRODUCT", "/products/" + id)
  }
}

export function editProduct(data) {
  return (dispatch, getState) => {
    const state = getState()

    callApi(dispatch, "EDIT_PRODUCT", "/products/", {
      method: "PATCH",
      body: data,
      headers: {
        Authorization: `Bearer ${state.auth.token}`
      }
    })
  }
}

export function deleteProduct(id, callBack) {
  return (dispatch, getState) => {
    const state = getState()

    console.log(id)
    callApi(dispatch, "DELETE_PRODUCT", "/products", {
      method: "PATCH",
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
