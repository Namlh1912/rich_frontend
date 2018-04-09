import React, { PureComponent } from "react"

class AdminCategoriesNew extends PureComponent {
  render() {
    const { error, data } = this.props

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
            <button type="submit" className="btn btn-primary">
              {data ? "Edit" : "Add"}
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default AdminCategoriesNew
