import React, { PureComponent } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { routerActions } from "react-router-redux"

export default (MainComponent, options) => {
  @connect(
    state => ({
      token: state.auth.token
    }),
    dispatch => ({
      router: bindActionCreators(routerActions, dispatch)
    })
  )
  class WithAuthentication extends PureComponent {
    componentWillMount() {
      this._checkAuthAndRedirect(this.props.token, this.props.isActive)
    }

    componentWillReceiveProps(nextProps, nextState) {
      if (this.props.token !== nextProps.token) {
        this._checkAuthAndRedirect(nextProps.token, nextProps.isActive)
      }
    }

    _checkAuthAndRedirect = (token, isActive) => {
      if (!token) {
        const { redirect } = options

        redirect && this.props.router.push(redirect)
      }
    }

    render() {
      return this.props.token ? <MainComponent {...this.props} /> : null
    }
  }

  return WithAuthentication
}
