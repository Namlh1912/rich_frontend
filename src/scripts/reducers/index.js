import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import auth from "./auth"
import category from "./category"
import product from "./product"
import survey from "./survey"

const rootReducer = combineReducers({
  auth,
  category,
  product,
  survey,
  routing: routerReducer
})

export default rootReducer
