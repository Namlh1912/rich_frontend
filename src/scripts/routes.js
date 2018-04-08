import React from "react"
import { Route, IndexRoute } from "react-router"
import App from "./containers/App"
import Home from "./containers/Home"
import Products from "./containers/Products"
import WithAuth from "./hocs/WithAuth"
import Login from "./containers/Login"
import Admin from "./containers/Admin"
import AdminHome from "./containers/AdminHome"

export default (
  <Route>
    <Route name="app" component={App} path="/">
      <IndexRoute component={Home} />
      <Route name="Products" path="/products(/:id)" component={Products} />
      <Route name="AdminLogin" path="/login" component={Login} />
      <Route
        path="/admin"
        component={WithAuth(Admin, {
          redirect: "/login"
        })}
      >
        <IndexRoute component={AdminHome} />
      </Route>
    </Route>
  </Route>
)
