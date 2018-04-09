import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getProduct } from "../actions/product"
import Image from "../../images/default-image.jpg"

@connect(
  (state, props) => ({
    product: state.product.data,
    productId: props.params.id && props.params.id.split("_")[0],
    categoryId: props.params.id && props.params.id.split("_")[1]
  }),
  dispatch => ({
    getProduct: bindActionCreators(getProduct, dispatch)
  })
)
class AdminProductNew extends PureComponent {
  state = {
    data: null
  }

  render() {
    const { params } = this.props
    const { data } = this.state

    return (
      <div className="container form-wrapper">
        <div id="product-form">
          <h1>{`${params.id ? "Edit" : "New"} Product`}</h1>
          <form
            className="text-center"
            onSubmit={
              params.id ? this._handleEditProduct : this._handleAddProduct
            }
          >
            <div className="form-group">
              <img
                ref={node => (this.preview = node)}
                src={(data && data.image) || Image}
                alt="Preview"
              />
            </div>
            <div className="form-group">
              <input
                ref={node => (this.image = node)}
                type="file"
                onChange={this._handleImageChange}
                className="form-control"
                id="name"
              />
            </div>
            <div className="form-group">
              {data ? (
                <input
                  ref={node => (this.name = node)}
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue={data.title}
                  placeholder={"Product Name"}
                />
              ) : (
                <input
                  ref={node => (this.name = node)}
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder={"Product Name"}
                />
              )}
            </div>
            <div className="form-group">
              {data ? (
                <textarea
                  ref={node => (this.description = node)}
                  className="form-control"
                  id="description"
                  defaultValue={data.description}
                  placeholder={"Product Description"}
                />
              ) : (
                <textarea
                  ref={node => (this.description = node)}
                  className="form-control"
                  id="description"
                  placeholder={"Product Description"}
                />
              )}
            </div>
          </form>
          {params.id ? (
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          ) : (
            <div className="text-center">
              <button type="submit" className="btn btn-primary text-center">
                Add
              </button>
            </div>
          )}
          {params.id && (
            <button className="btn btn-danger pull-right">Delete</button>
          )}
        </div>
      </div>
    )
  }

  _handleImageChange = node => {
    const input = node.target

    if (input.files && input.files[0]) {
      var reader = new FileReader()

      reader.onload = e => {
        this.preview.src = e.target.result
      }

      reader.readAsDataURL(input.files[0])
    }
  }

  _handleAddProduct = e => {
    e.preventDefault()
  }

  _handleEditProduct = e => {
    e.preventDefault()
  }

  componentWillReceiveProps(props) {
    const { params, productId, categoryId } = this.props

    if (params.id) {
      if (
        props.product &&
        productId === props.product.id &&
        categoryId === props.product.category
      ) {
        this.setState({
          data: props.product
        })
      }
    }
  }

  componentDidMount() {
    const { productId, categoryId, getProduct } = this.props

    if (productId && categoryId) {
      getProduct(productId, categoryId)
    }
  }
}

export default AdminProductNew
