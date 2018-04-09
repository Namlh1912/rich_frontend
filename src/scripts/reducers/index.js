import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import auth from "./auth"
import category from "./category"
import product from "./product"

const rootReducer = combineReducers({
  auth,
  category,
  product,
  routing: routerReducer
})

export default rootReducer
