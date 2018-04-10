import React from "react"
import AdminCategoriesNew from "./AdminCategoriesNew"

const AdminCategoriesEdit = props => {
  return <AdminCategoriesNew {...props} isEditing={true} />
}

export default AdminCategoriesEdit
