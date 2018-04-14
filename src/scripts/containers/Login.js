import React, { PureComponent } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../actions/auth";
import { routerActions } from "react-router-redux";

@connect(
  state => ({
    error: state.auth.error,
    isLoading: state.auth.isLoading,
    token: state.auth.token
  }),
  dispatch => ({
    login: bindActionCreators(login, dispatch),
    router: bindActionCreators(routerActions, dispatch)
  })
)
class Login extends PureComponent {
  render() {
    const { error } = this.props;

    return (
      <div className="container form-wrapper">
        <div id="login-form">
          <h1>Login Form</h1>
          <form onSubmit={this._handleUserLogin}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                ref={node => (this.email = node)}
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                ref={node => (this.password = node)}
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </div>
            {error && <div className="bg-danger">{error}</div>}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/" className="pull-right btn btn-danger">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    );
  }

  _handleUserLogin = e => {
    e.preventDefault();
    const email = this.email.value;
    const password = this.password.value;

    this.props.login(email, password);
  };

  componentDidMount() {
    const { token } = this.props;

    token && this.props.router.push("/admin");
  }

  componentDidUpdate() {
    const { token } = this.props;

    token && this.props.router.push("/admin");
  }
}

export default Login;
