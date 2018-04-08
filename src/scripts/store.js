import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from "react-router-redux"
import { browserHistory } from "react-router"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const composeEnhancers =
  process.env.REACT_APP_SECRET_CODE !== "production"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

export default function configureStore(initialState) {
  const middlewares = [thunk]

  middlewares.push(routerMiddleware(browserHistory))

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}
