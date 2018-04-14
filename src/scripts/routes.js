import React from "react"
import { Route, IndexRoute } from "react-router"
import App from "./containers/App"
import Home from "./containers/Home"
import Category from "./containers/Category"
import Surveys from "./containers/Surveys"
import WithAuth from "./hocs/WithAuth"
import Login from "./containers/Login"
import Admin from "./containers/Admin"
import AdminHome from "./containers/AdminHome"
import AdminCategoriesNew from "./containers/AdminCategoriesNew"
import AdminCategoriesEdit from "./containers/AdminCategoriesEdit"
import AdminCategoryDetail from "./containers/AdminCategoryDetail"
import AdminProductNew from "./containers/AdminProductNew"
import AdminProductEdit from "./containers/AdminProductEdit"
import AdminSurveyNew from "./containers/AdminSurveyNew"
import AdminSurveyEdit from "./containers/AdminSurveyEdit"

export default (
  <Route>
    <Route name="app" component={App} path="/">
      <IndexRoute component={Home} />
      <Route name="Category" path="/categories(/:id)" component={Category} />
      <Route name="Surveys" path="/surveys(/:id)" component={Surveys} />
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
          path="/admin/categories(/:id)/products(/:productId)/edit"
          component={AdminProductEdit}
        />
        <Route
          name="ProductNew"
          path="/admin/categories(/:id)/products/new"
          component={AdminProductNew}
        />
        <Route
          name="SurveyNew"
          path="/admin/surveys/new"
          component={AdminSurveyNew}
        />
        <Route
          name="SurveyEdit"
          path="/admin/surveys(/:id)/edit"
          component={AdminSurveyEdit}
        />
      </Route>
    </Route>
  </Route>
)
