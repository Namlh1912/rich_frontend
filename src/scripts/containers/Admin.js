import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { logout } from "../actions/auth"
import { routerActions } from "react-router-redux"

@connect(
  state => ({
    token: state.auth.token
  }),
  dispatch => ({
    logout: bindActionCreators(logout, dispatch),
    router: bindActionCreators(routerActions, dispatch)
  })
)
class Admin extends PureComponent {
  render() {
    return (
      <div>
        {this.props.children}
        <button
          id="btn-logout"
          className="btn btn-danger"
          onClick={this._handleClickLogout}
        >
          Logout
        </button>
      </div>
    )
  }

  _handleClickLogout = e => {
    e.preventDefault()
    const { logout } = this.props

    logout()
  }

  // componentDidMount() {
  //   const { token } = this.props

  //   token && this.props.router.push("/admin")
  // }

  // componentDidUpdate() {
  //   const { token } = this.props

  //   token && this.props.router.push("/admin")
  // }
}

export default Admin
