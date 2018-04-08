import React from "react"
import Logo from "../../images/logo.png"

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="left">
          <img src={Logo} alt="Rich logo" className="logo" />
        </div>

        <div className="right">
          <div className="header-title">The Exclusive Menu</div>
        </div>
      </div>
    </div>
  )
}

export default Header
