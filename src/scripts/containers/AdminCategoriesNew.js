import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { createNewCategory } from "../actions/category"
import { routerActions } from "react-router-redux"

@connect(
  state => ({
    isLoading: state.category.isLoading
  }),
  dispatch => ({
    createNewCategory: bindActionCreators(createNewCategory, dispatch),
    router: bindActionCreators(routerActions, dispatch)
  })
)
class AdminCategoriesNew extends PureComponent {
  render() {
    const { error, data, isLoading } = this.props

    return (
      <div className="container form-wrapper">
        <div id="category-form">
          <h1>{data ? "Edit Category" : "Add New Category"}</h1>
          <form
            onSubmit={data ? this._handleEditProduct : this._handleAddProduct}
          >
            <div className="form-group">
              <input
                ref={node => (this.name = node)}
                type="text"
                className="form-control"
                id="category-name"
                placeholder={(data && data.title) || "Category name"}
              />
            </div>
            {error && <div className="bg-danger">{error}</div>}
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary"
            >
              {data ? "Edit" : "Add"}
            </button>
          </form>
        </div>
      </div>
    )
  }

  _handleAddProduct = e => {
    const { createNewCategory, router } = this.props
    e.preventDefault()

    createNewCategory(this.name.value, () => {
      router.push("/admin")
    })
  }
}

export default AdminCategoriesNew
