import React, { PureComponent } from "react"
import ProductsSlider from "../components/ProductsSlider"
import { getCategoryDetail, submitRate } from "../actions/category"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import FeedbackForm from "../components/FeedbackForm"

@connect(
  (state, props) => ({
    isLoading: state.category.isLoading,
    category: state.category.category,
    categoryId: parseInt(props.params.id, 10)
  }),
  dispatch => ({
    getCategoryDetail: bindActionCreators(getCategoryDetail, dispatch),
    submitRate: bindActionCreators(submitRate, dispatch)
  })
)
class Category extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      view: 1,
      customerInfo: {}
    }
  }

  render() {
    const { category, categoryId, isLoading } = this.props
    const { view } = this.state

    return !isLoading ? (
      view === 1 ? (
        <div className="col-lg-12 col-md-12">
          <FeedbackForm
            onNextStep={this._handleNextStep}
            ref={node => (this.feedbackForm = node)}
          />
        </div>
      ) : category && category.id === categoryId ? (
        <div id="products" className="container">
          <ProductsSlider
            data={category.products}
            customerInfo={this.state.customerInfo}
            onComplete={this._handleSubmitRate}
          />
        </div>
      ) : null
    ) : (
      <div>Loading...</div>
    )
  }

  componentDidMount() {
    const { categoryId, getCategoryDetail } = this.props

    getCategoryDetail(categoryId)
  }

  _handleSubmitRate = data => {
    const { submitRate, categoryId, getCategoryDetail } = this.props
    const { customerInfo } = this.state

    submitRate(
      {
        categoryId,
        customer: { ...customerInfo, feedback: data.feedback },
        rates: data.rates
      },
      () => {
        getCategoryDetail(categoryId)
        this.setState({ view: 1, customerInfo: {} })
      }
    )
  }

  _handleNextStep = data => {
    this.setState({ view: 2, customerInfo: data })
  }
}

export default Category
