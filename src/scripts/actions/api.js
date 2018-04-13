const BASE_URL = "https://richapi.herokuapp.com"

export default function callApi(dispatch, actionType, url, opts = {}) {
  const [request, success, failure] = [
    actionType,
    `${actionType}_SUCCESS`,
    `${actionType}_FAILURE`
  ]
  const req = {}
  const apiServer = BASE_URL

  opts.method && (req.method = opts.method)
  opts.headers && (req.headers = opts.headers)
  opts.body && (req.body = opts.body)

  dispatch({ type: request })

  fetch(apiServer + url, req)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        dispatch({
          type: failure,
          error: res.error.message || res.error
        })
      } else {
        dispatch({
          type: success,
          result: res.data || res
        })
      }
    })
}
