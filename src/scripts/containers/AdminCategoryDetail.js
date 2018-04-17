import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getCategoryDetail, editCategory } from "../actions/category"
import { deleteProduct } from "../actions/product"
import { routerActions } from "react-router-redux"
import { Link } from "react-router"
import ConfirmModal from "../components/ConfirmModal"

const generateContent = (data, onClick, onDelete) =>
  data.map(item => {
    const imgStyle = {
      background: `url(${window.__BASE_IMG_URL__ +
        item.imgLink}) no-repeat center center`,
      width: "100%",
      paddingBottom: "100%",
      backgroundSize: "cover"
    }

    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td className="product-image text-center">
          <div style={imgStyle} />
        </td>
        <td className="product-title">{item.name}</td>
        <td className="product-description">{item.description}</td>
        <td>{item.rates}</td>
        <td width="60">
          <button className="btn btn-info" onClick={() => onClick(item.id)}>
            Edit
          </button>
        </td>
        <td width="60" className="text-right">
          <button className="btn btn-danger" onClick={() => onDelete(item.id)}>
            X
          </button>
        </td>
      </tr>
    )
  })

@connect(
  (state, props) => ({
    isLoading: state.category.isLoading && state.product.isLoading,
    category: state.category.category,
    categoryId: parseInt(props.params.id, 10)
  }),
  dispatch => ({
    getCategoryDetail: bindActionCreators(getCategoryDetail, dispatch),
    editCategory: bindActionCreators(editCategory, dispatch),
    router: bindActionCreators(routerActions, dispatch),
    deleteProduct: bindActionCreators(deleteProduct, dispatch)
  })
)
class AdminCategoryDetail extends PureComponent {
  state = {
    open: false,
    selectedProduct: null
  }

  render() {
    const { isLoading, categoryId, category: data } = this.props
    const { open, selectedProduct } = this.state

    return !isLoading && data && data.id === categoryId ? (
      <div className="container">
        <h1 className="text-center">{data.name}</h1>
        <div className="form-group">
          <label htmlFor="categoryname" style={{ display: "block" }}>
            Category Name
          </label>
          <input
            style={{ width: "80%", display: "inline-block" }}
            ref={node => (this.name = node)}
            type="text"
            className="form-control"
            id="categoryname"
            placeholder="Category name"
            autoComplete="categoryname"
            defaultValue={data.name}
          />
          <button
            className="btn btn-info pull-right"
            onClick={this._handleEditName}
          >
            Edit
          </button>
        </div>
        {!!data.products.length ? (
          <table className="table table-striped products-table " width="100%">
            <thead>
              <tr>
                <th>ID</th>
                <th className="text-center">Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Rating</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {generateContent(
                data.products,
                this._handleEditProduct,
                this._handleOpenModal
              )}
            </tbody>
          </table>
        ) : (
          <h3>There is no product!</h3>
        )}
        <Link
          className="btn btn-success btn-add"
          to={`/admin/categories/${categoryId}/products/new`}
        >
          Add New Product
        </Link>
        <ConfirmModal
          open={open}
          onClose={this._handleCloseModal}
          onConfirm={this._handleDeleteProduct.bind(null, selectedProduct)}
          message="Are you sure to delete this product?"
        />
      </div>
    ) : (
      <div>Loading...</div>
    )
  }

  componentDidMount() {
    const { getCategoryDetail, categoryId } = this.props

    getCategoryDetail(categoryId)
  }

  componentWillReceiveProps(props) {
    const { category, isLoading, getCategoryDetail, categoryId } = this.props

    if (!props.category && category && !props.isLoading && isLoading) {
      getCategoryDetail(categoryId)
    }
  }

  _handleCloseModal = () =>
    this.setState({
      open: false,
      selectedProduct: null
    })

  _handleOpenModal = id =>
    this.setState({
      open: true,
      selectedProduct: id
    })

  _handleDeleteProduct = id => {
    const { deleteProduct, getCategoryDetail, categoryId } = this.props
    this._handleCloseModal()

    deleteProduct(id, () => {
      getCategoryDetail(categoryId)
    })
  }

  _handleEditName = () => {
    const { editCategory, categoryId } = this.props

    editCategory({
      id: categoryId,
      name: this.name.value
    })
  }

  _handleEditProduct = id => {
    const { categoryId } = this.props
    this.props.router.push(
      `/admin/categories/${categoryId}/products/${id}/edit`
    )
  }
}

export default AdminCategoryDetail
