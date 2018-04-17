import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addNewProduct, editProduct, deleteProduct } from "../actions/product"
import Image from "../../images/default-image.jpg"
import ConfirmModal from "../components/ConfirmModal"
import { routerActions } from "react-router-redux"

@connect(
  (state, props) => ({
    isLoading: state.product.isLoading,
    categoryId: parseInt(props.params.id, 10)
  }),
  dispatch => ({
    addNewProduct: bindActionCreators(addNewProduct, dispatch),
    editProduct: bindActionCreators(editProduct, dispatch),
    deleteProduct: bindActionCreators(deleteProduct, dispatch),
    router: bindActionCreators(routerActions, dispatch)
  })
)
class AdminProductNew extends PureComponent {
  state = {
    open: false
  }

  render() {
    const { data, isLoading } = this.props
    const { open } = this.state

    return (
      <div className="container form-wrapper">
        <div id="product-form">
          <h1>{`${data ? "Edit" : "New"} Product`}</h1>
          <form
            className="text-center"
            onSubmit={data ? this._handleEditProduct : this._handleAddProduct}
          >
            <div className="form-group">
              <img
                ref={node => (this.preview = node)}
                src={(data && window.__BASE_IMG_URL__ + data.imgLink) || Image}
                alt="Preview"
              />
            </div>
            {!data && (
              <div className="form-group">
                <input
                  ref={node => (this.image = node)}
                  type="file"
                  onChange={this._handleImageChange}
                  className="form-control"
                  id="name"
                />
              </div>
            )}
            <div className="form-group">
              {data ? (
                <input
                  ref={node => (this.name = node)}
                  type="text"
                  className="form-control"
                  id="name"
                  defaultValue={data.name}
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
          {data ? (
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary"
              onClick={this._handleEditProduct}
            >
              Edit
            </button>
          ) : (
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary text-center"
                onClick={this._handleAddProduct}
              >
                Add
              </button>
            </div>
          )}
          {data && (
            <button
              className="btn btn-danger pull-right"
              disabled={isLoading}
              onClick={this._handleOpenModal}
            >
              Delete
            </button>
          )}
        </div>
        <ConfirmModal
          open={open}
          onClose={this._handleCloseModal}
          onConfirm={this._handleDeleteProduct}
          message="Are you sure to delete this product?"
        />
      </div>
    )
  }

  _handleDeleteProduct = () => {
    const { data, deleteProduct } = this.props

    deleteProduct(data.id, this._goBack)
  }

  _goBack = () => {
    const { router, categoryId } = this.props

    router.push(`/admin/categories/${categoryId}`)
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
    const { addNewProduct, categoryId } = this.props

    addNewProduct(
      {
        name: this.name.value,
        description: this.description.value,
        categoryId: categoryId,
        file: this.image.files[0]
      },
      this._goBack
    )
  }

  _handleEditProduct = e => {
    e.preventDefault()
    const { editProduct, categoryId, data } = this.props

    editProduct(
      {
        name: this.name.value,
        id: data.id,
        categoryId,
        description: this.description.value
      },
      this._goBack
    )
  }

  _handleCloseModal = () =>
    this.setState({
      open: false
    })

  _handleOpenModal = () =>
    this.setState({
      open: true
    })

  componentWillReceiveProps(props) {
    const { productId } = this.props

    if (productId) {
      if (props.product && productId === props.product.id) {
        this.setState({
          data: props.product
        })
      }
    }
  }

  componentDidMount() {
    const { productId, getProduct } = this.props

    if (productId) {
      getProduct(productId)
    }
  }
}

export default AdminProductNew
