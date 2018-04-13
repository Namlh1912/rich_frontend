import React, { PureComponent } from "react"
import ProductsSlider from "../components/ProductsSlider"
import { getCategoryDetail } from "../actions/category"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

@connect(
  state => ({
    category: state.category.category
  }),
  dispatch => ({
    getCategoryDetail: bindActionCreators(getCategoryDetail, dispatch)
  })
)
class Category extends PureComponent {
  render() {
    const { category } = this.props
    console.log(category)

    return category ? (
      <div id="products" className="container">
        <ProductsSlider data={category.products} />
      </div>
    ) : null
  }

  componentDidMount() {
    const { params, getCategoryDetail } = this.props

    getCategoryDetail(params.id)
  }
}

export default Category
