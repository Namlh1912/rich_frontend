import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, browserHistory } from "react-router"
import configureStore from "./scripts/store"
import routes from "./scripts/routes"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById("root")
)
