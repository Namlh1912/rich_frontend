import React, { PureComponent } from "react";

class FeedbackForm extends PureComponent {
  render() {
    return (
      <div className="form-feedback">
        <form className="col-xs-12 col-sm-6 col-md-6">
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
          <div className="form-group col-xs-12 col-sm-12 col-md-12">
            <textarea
              ref={node => (this.feedback = node)}
              className="form-control feedback"
              id="description"
              rows="3"
              placeholder="Đánh giá khách hàng"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12">
            <button
              style={{ float: "right" }}
              type="submit"
              className="btn btn-primary submit"
              onClick={() => this._onSubmitCustomerForm()}
            >
              <span className="glyphicon glyphicon-chevron-right" />
            </button>
          </div>
        </form>
      </div>
    );
  }

  _onSubmitCustomerForm = e => {
    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const feedback = this.feedback.value;
    var data = { name, email, phone, feedback };
    this.props.onItemClick(data);
  };
}

export default FeedbackForm;
