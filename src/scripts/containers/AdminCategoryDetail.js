import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getCategoryDetail } from "../actions/category"
import { routerActions } from "react-router-redux"
import { Link } from "react-router"

const generateContent = (data, onClick, cate) =>
  data.map(item => {
    const imgStyle = {
      background: `url(${item.image}) no-repeat center center`,
      width: "100%",
      paddingBottom: "100%",
      backgroundSize: "cover"
    }

    return (
      <tr key={item.id} onClick={() => onClick(item.id, cate)}>
        <td>{item.id}</td>
        <td className="product-image text-center">
          <div style={imgStyle} />
        </td>
        <td className="product-title">{item.title}</td>
        <td className="product-description">{item.description}</td>
      </tr>
    )
  })

@connect(
  state => ({
    category: state.category.category
  }),
  dispatch => ({
    getCategoryDetail: bindActionCreators(getCategoryDetail, dispatch),
    router: bindActionCreators(routerActions, dispatch)
  })
)
class AdminCategoryDetail extends PureComponent {
  constructor() {
    super()

    this.state = {
      data: null
    }
  }

  render() {
    const { data } = this.state

    return data ? (
      <div className="container">
        <h1 className="text-center">{data.title}</h1>
        <table className="table table-hover products-table " width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th className="text-center">Image</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {generateContent(data.products, this._handleEditProduct, data.id)}
          </tbody>
        </table>
        <Link className="btn btn-success btn-add" to="/admin/products/new">
          Add New Product
        </Link>
      </div>
    ) : (
      <div>Loading...</div>
    )
  }

  componentWillReceiveProps(props) {
    const { category } = this.props

    if (
      props.category &&
      props.category !== category &&
      props.category.id === this.props.params.id
    ) {
      this.setState({
        data: props.category
      })
    }
  }

  componentDidMount() {
    const { getCategoryDetail } = this.props

    getCategoryDetail(this.props.params.id)
  }

  _handleEditProduct = (id, cate) => {
    this.props.router.push(`/admin/products/${id}_${cate}/edit`)
  }
}

export default AdminCategoryDetail
