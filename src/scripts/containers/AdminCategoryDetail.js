import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getCategoryDetail, editCategory } from "../actions/category"
import { routerActions } from "react-router-redux"
import { Link } from "react-router"

const generateContent = (data, onClick) =>
  data.map(item => {
    const imgStyle = {
      background: `url(${window.__BASE_IMG_URL__ +
        item.imgLink}) no-repeat center center`,
      width: "100%",
      paddingBottom: "100%",
      backgroundSize: "cover"
    }

    return (
      <tr key={item.id} onClick={() => onClick(item.id)}>
        <td>{item.id}</td>
        <td className="product-image text-center">
          <div style={imgStyle} />
        </td>
        <td className="product-title">{item.name}</td>
        <td className="product-description">{item.description}</td>
        <td className="text-right">{item.rates}</td>
      </tr>
    )
  })

@connect(
  (state, props) => ({
    isLoading: state.category.isLoading,
    category: state.category.category,
    categoryId: parseInt(props.params.id, 10)
  }),
  dispatch => ({
    getCategoryDetail: bindActionCreators(getCategoryDetail, dispatch),
    editCategory: bindActionCreators(editCategory, dispatch),
    router: bindActionCreators(routerActions, dispatch)
  })
)
class AdminCategoryDetail extends PureComponent {
  render() {
    const { categoryId, category: data } = this.props

    return data && data.id === categoryId ? (
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
          <table className="table table-hover products-table " width="100%">
            <thead>
              <tr>
                <th>ID</th>
                <th className="text-center">Image</th>
                <th>Name</th>
                <th>Description</th>
                <th className="text-right">Rating</th>
              </tr>
            </thead>
            <tbody>
              {generateContent(data.products, this._handleEditProduct, data.id)}
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
      </div>
    ) : (
      <div>Loading...</div>
    )
  }

  componentDidMount() {
    const { getCategoryDetail } = this.props

    getCategoryDetail(this.props.params.id)
  }

  componentWillReceiveProps(props) {
    const { category, isLoading, getCategoryDetail, categoryId } = this.props

    if (!props.category && category && !props.isLoading && isLoading) {
      getCategoryDetail(categoryId)
    }
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
