import React, { PureComponent } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../../styles/app.css"
import { ToastContainer } from "react-toastify"
import config from "../../config.json"

class App extends PureComponent {
  render() {
    return (
      <div>
        <ToastContainer hideProgressBar={true} pauseOnHover={false} />
        <Header />
        <div className="body">{this.props.children}</div>
        <Footer />
      </div>
    )
  }

  componentWillMount() {
    window.__BASE_IMG_URL__ = config.SERVER_URL + "/images/upload/thumbnail-"
  }
}

export default App
