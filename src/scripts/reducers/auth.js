import Cookie from "js-cookie"

const INITIAL_STATE = {
  isLoading: false,
  token: Cookie.get("nam_token"),
  error: null,
  profile: null
}

export default function authReducer(state = INITIAL_STATE, action) {
  console.log(action.type)

  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      const expires = new Date()
      expires.setDate(expires.getDate() + 1)
      Cookie.set("nam_token", action.res.token, {
        expires
      })
      return {
        ...state,
        isLoading: false,
        token: action.res.token,
        profile: action.res.profile,
        error: null
      }

    case "USER_LOGIN_FAILURE":
      return {
        ...state,
        isLoading: false,
        token: null,
        error: action.error,
        profile: null
      }

    case "USER_LOGOUT_SUCCESS":
      Cookie.remove("nam_token")
      return {
        ...state,
        isLoading: false,
        token: null,
        profile: null,
        error: null
      }

    default:
      return state
  }
}
