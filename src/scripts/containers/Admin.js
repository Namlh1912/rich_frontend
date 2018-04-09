import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { logout } from "../actions/auth"
import { routerActions } from "react-router-redux"
import { Link } from "react-router"

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
        <div id="btn-logout">
          <Link
            style={{ marginRight: 10 }}
            className="btn btn-primary"
            to="/admin"
          >
            Home
          </Link>
          <button className="btn btn-danger" onClick={this._handleClickLogout}>
            Logout
          </button>
        </div>
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
