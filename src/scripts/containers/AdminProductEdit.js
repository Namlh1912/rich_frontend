import AdminProductNew from "./AdminProductNew"
import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getProduct } from "../actions/product"

@connect(
  (state, props) => ({
    isLoading: state.product.isLoading,
    product: state.product.data,
    productId: parseInt(props.params.productId, 10)
  }),
  dispatch => ({
    getProduct: bindActionCreators(getProduct, dispatch)
  })
)
class AdminProductEdit extends PureComponent {
  render() {
    const { product, productId, params } = this.props

    return product && product.id === productId ? (
      <AdminProductNew data={product} params={params} />
    ) : (
      <div>Loading...</div>
    )
  }

  componentDidMount() {
    const { getProduct, productId } = this.props

    getProduct(productId)
  }
}

export default AdminProductEdit
