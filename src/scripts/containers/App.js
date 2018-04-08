import React, { PureComponent } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../../styles/app.css"

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <div className="body">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default App
