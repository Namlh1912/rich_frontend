import React from "react"
import Logo from "../../images/logo.png"
import { Link } from "react-router"

const Header = () => {
  // console.log(this.props.location.pathname);
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <Link to="/">
            <img src={Logo} alt="Rich logo" className="logo" />
          </Link>
        </div>

        <div className="right">
          <div className="header-title">The Exclusive Menu</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
