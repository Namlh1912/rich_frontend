import React, { PureComponent } from "react"
import ProductsSlider from "../components/ProductsSlider"
import { getCategoryDetail, submitRate } from "../actions/category"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import FeedbackForm from "../components/FeedbackForm"

@connect(
  (state, props) => ({
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
    const { category, categoryId } = this.props

    return this.state.view === 1 ? (
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
  }

  componentDidMount() {
    const { categoryId, getCategoryDetail } = this.props

    getCategoryDetail(categoryId)
  }

  _handleSubmitRate = data => {
    const { submitRate, categoryId } = this.props
    const { customerInfo } = this.state

    submitRate({
      categoryId,
      customer: { ...customerInfo, feedback: data.feedback },
      rates: data.rates
    })
  }

  _handleNextStep = data => {
    this.setState({ view: 2, customerInfo: data })
  }
}

export default Category
