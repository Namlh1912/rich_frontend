import React from "react"
import { Route, IndexRoute } from "react-router"
import App from "./containers/App"
import Home from "./containers/Home"
import Products from "./containers/Products"
import WithAuth from "./hocs/WithAuth"
import Login from "./containers/Login"
import Admin from "./containers/Admin"
import AdminHome from "./containers/AdminHome"
import AdminCategoriesNew from "./containers/AdminCategoriesNew"
import AdminCategoriesEdit from "./containers/AdminCategoriesEdit"
import AdminCategoryDetail from "./containers/AdminCategoryDetail"
import AdminProductNew from "./containers/AdminProductNew"
import AdminProductEdit from "./containers/AdminProductEdit"

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
        <Route
          name="CategoryNew"
          path="/admin/categories/new(/:id)"
          component={AdminCategoriesNew}
        />
        <Route
          name="CategoryEdit"
          path="/admin/categories/edit(/:id)"
          component={AdminCategoriesEdit}
        />
        <Route
          name="CategoryNew"
          path="/admin/categories(/:id)"
          component={AdminCategoryDetail}
        />
        <Route
          name="ProductEdit"
          path="/admin/products(/:id)/edit"
          component={AdminProductEdit}
        />
        <Route
          name="ProductNew"
          path="/admin/products(/:id)/new"
          component={AdminProductNew}
        />
      </Route>
    </Route>
  </Route>
)
