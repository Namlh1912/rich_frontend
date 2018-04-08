import React from "react"
import { Route, IndexRoute, Redirect } from "react-router"
import App from "./containers/App"
import Home from "./containers/Home"
import Products from "./containers/Products"

export default (
  <Route>
    <Route name="app" component={App} path="/">
      <IndexRoute component={Home} />
      <Route name="Products" path="products(/:id)" component={Products} />
    </Route>
  </Route>
)
