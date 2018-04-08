export function login(email, password) {
  if (email && password) {
    return dispatch => {
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        res: {
          profile: {
            email
          },
          token: email
        }
      })
    }
  } else {
    return dispatch => {
      dispatch({
        type: "USER_LOGIN_FAILURE",
        error: "Invalid email or password!"
      })
    }
  }
}

export function logout() {
  return dispatch => {
    dispatch({
      type: "USER_LOGOUT_SUCCESS"
    })
  }
}
