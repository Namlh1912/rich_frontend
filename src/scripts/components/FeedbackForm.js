import React, { PureComponent } from "react"

class FeedbackForm extends PureComponent {
  render() {
    return (
      <div className="form-feedback">
        <div className="col-xs-12 col-sm-6 col-md-6">
          <div className="form-group col-xs-12 col-sm-8 col-md-8">
            <input
              ref={node => (this.name = node)}
              type="text"
              className="form-control feedback"
              id="name"
              placeholder="Họ tên khách hàng"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-xs-12 col-sm-6 col-lg-6 col-md-6">
              <input
                ref={node => (this.email = node)}
                type="email"
                className="form-control feedback"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-xs-12 col-sm-6 col-lg-6 col-md-6">
              <input
                ref={node => (this.phone = node)}
                type="text"
                className="form-control feedback"
                id="phone"
                placeholder="Số điện thoại"
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <button
              style={{ float: "right" }}
              className="btn btn-primary submit"
              onClick={this._handleNextStep}
            >
              <span className="glyphicon glyphicon-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  _handleNextStep = e => {
    e.preventDefault()
    const { onNextStep } = this.props

    onNextStep({
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value
    })
  }
}

export default FeedbackForm
