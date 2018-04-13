import React, { PureComponent } from "react"
import { Link } from "react-router"
import { getAllCategories } from "../actions/category"
import { getAllSurveys } from "../actions/survey"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

const list = [
  {
    id: "1",
    title: "Product",
    list: [
      { id: "1", title: "Food" },
      { id: "2", title: "Ice-cream" },
      { id: "3", title: "Fruit" },
      { id: "10", title: "Cake" },
      { id: "4", title: "Food" },
      { id: "5", title: "Ice-cream" },
      { id: "6", title: "Fruit" },
      { id: "7", title: "Cake" },
      { id: "1", title: "Food" },
      { id: "2", title: "Ice-cream" },
      { id: "3", title: "Fruit" },
      { id: "10", title: "Cake" },
      { id: "4", title: "Food" },
      { id: "5", title: "Ice-cream" },
      { id: "6", title: "Fruit" },
      { id: "7", title: "Cake" }
    ]
  },
  {
    id: "2",
    title: "Survey",
    list: [
      { id: "1", title: "User-survey" },
      { id: "2", title: "User-survey event 2" }
    ]
  }
]

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
class Home extends PureComponent {
  render() {
    const { categories, surveys } = this.props

    return (
      <div id="home" className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 border-right">
            <div className="menu">
              <h2>Products</h2>
              <div className="menu-list">
                {categories.map(cate => (
                  <Link className="menu-item" to={`/category/${cate.id}`}>
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
                {surveys.map(item => (
                  <Link
                    key={item.id}
                    className="menu-item"
                    to={`/surveys/${item.id}`}
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

export default Home
