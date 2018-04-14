import React, { PureComponent } from "react"
import { Link } from "react-router"
import { getAllCategories } from "../actions/category"
import { getAllSurveys } from "../actions/survey"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

@connect(
  state => ({
    isLoading: state.category.isLoading,
    categories: state.category.categories,
    surveys: state.survey.surveys
  }),
  dispatch => ({
    getAllCategories: bindActionCreators(getAllCategories, dispatch),
    getAllSurveys: bindActionCreators(getAllSurveys, dispatch)
  })
)
class AdminHome extends PureComponent {
  render() {
    const { categories, surveys } = this.props

    return (
      <div id="home" className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 border-right">
            <div className="menu">
              <h2>Products</h2>
              <div className="menu-list">
                <Link
                  className="btn-success color-white menu-item"
                  to={`/admin/categories/new`}
                >
                  <b>Add new Category</b>
                </Link>
                {categories.map(cate => (
                  <Link
                    key={cate.id}
                    className="menu-item"
                    to={`/admin/categories/${cate.id}`}
                  >
                    {cate.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="menu">
              <h2>Surveys</h2>
              <div className="menu-list">
                <Link
                  className="btn-success color-white menu-item"
                  to={`/admin/surveys/new`}
                >
                  <b>Add new Survey</b>
                </Link>
                {surveys.map(item => (
                  <Link
                    key={item.id}
                    className="menu-item"
                    to={`/admin/surveys/${item.id}/edit`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const { getAllCategories, getAllSurveys } = this.props

    getAllCategories()
    getAllSurveys()
  }
}

export default AdminHome
