import React, { PureComponent } from 'react';

const CustomerInfoForm = () => {
  return(
    <div className="form-feedback">
    <form className="col-xs-12 col-sm-6 col-md-6">
      <div className="form-group col-xs-12 col-sm-8 col-md-8">
        <input type="text" className="form-control feedback" id="name" placeholder="Họ tên khách hàng"/>
      </div>
      <div className="form-row">
        <div className="form-group col-xs-12 col-sm-6 col-lg-6 col-md-6">
          <input type="email" className="form-control feedback" id="email" placeholder="Email"/>
        </div>
        <div className="form-group col-xs-12 col-sm-6 col-lg-6 col-md-6">
          <input type="text" className="form-control feedback" id="phone" placeholder="Số điện thoại"/>
        </div>
      </div>
      <div className="form-group col-xs-12 col-sm-12 col-md-12">
        <textarea className="form-control feedback" id="description" rows="3" placeholder="Đánh giá khách hàng"/>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12">
        <button style={{float:'right'}} type="submit" className="btn btn-primary submit">Gửi đi</button>
      </div>
    </form>
    </div>
  )
}

class FeedbackForm extends PureComponent{
  render(){
    return(
      <div>
        <CustomerInfoForm/>
      </div>
    )
  }
}

export default FeedbackForm;