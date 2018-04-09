import React, { PureComponent } from 'react';

const province = [
  {key:"HCM", text:"Hồ Chí Minh"},
  {key:"HN", text:"Hà Nội"},
  {key:"DN", text:"Đà Nẵng"},
  {key:"CT", text:"Cần Thơ"},
  {key:"HP", text:"Hải Phòng"},
  {key:"CM", text:"Cà Mau"},
  {key:"BT", text:"Bến Tre"},
  {key:"LA", text:"Long An"},
  {key:"BMT", text:"Buôn Mê Thuột"},
  {key:"H", text:"Huế"},
  {key:"HA", text:"Hội An"},
]

const CustomerInfoForm = () =>{
  return(
      <div className="form-customer ">
        <h3 className="customer col-lg-12 col-md-12">THÔNG TIN KHÁCH HÀNG</h3>
        <form>
          <div className="row">
            <div className="form-group col-lg-12 col-md-12">
              <label>TÊN CÔNG TY</label>
              <input type="text" className="form-control customer" id="name"/>
            </div>
            <div className="form-group col-lg-12 col-md-12">
              <label>TỈNH THÀNH</label>
              <select className="form-control customer">
                {
                  province.map((item,index)=>(
                    <option key={index}>{item.text}</option>
                  ))
                }
              </select>
            </div>
            <div className="form-group col-lg-12 col-md-12">
              <label>HÌNH THỨC KINH DOANH</label>
            </div>
            <div className="row col-lg-12 col-md-12">
              <div className="form-group col-md-6">
                <input type="checkbox" name="inlineRadioOptions" id="option" autoComplete="off" />
                <div className="btn-group">
                    <label className="btn btn-success">
                        <span className="glyphicon glyphicon-ok"></span>
                        <span> </span>
                    </label>
                    <label className="btn btn-default active">
                        Bakery
                    </label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <input type="checkbox" name="inlineRadioOptions" id="option" autoComplete="off" />
                <div className="btn-group">
                    <label className="btn btn-success">
                        <span className="glyphicon glyphicon-ok"></span>
                        <span> </span>
                    </label>
                    <label className="btn btn-default active">
                        Food Service
                    </label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <input type="checkbox" name="inlineRadioOptions" id="option" autoComplete="off" />
                <div className="btn-group">
                    <label className="btn btn-success">
                        <span className="glyphicon glyphicon-ok"></span>
                        <span> </span>
                    </label>
                    <label className="btn btn-default active">
                        Retailer
                    </label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <input type="checkbox" name="inlineRadioOptions" id="option" autoComplete="off" />
                <div className="btn-group">
                    <label className="btn btn-success">
                        <span className="glyphicon glyphicon-ok"></span>
                        <span> </span>
                    </label>
                    <input type="text" className="form-control others" placeholder="others"/>
                </div>
              </div>
            </div>
            <div className="form-group col-lg-6 col-md-6">
              <label>TÊN NGƯỜI LIÊN HỆ</label>
              <input type="text" className="form-control customer" id="workplace"/>
            </div>
            <div className="form-group col-lg-6 col-md-6">
              <label>SỐ ĐIỆN THOẠI</label>
              <input type="text" className="form-control customer" id="phone"/>
            </div>
            <div className="form-group col-lg-12 col-md-12">
              <label>GHI CHÚ</label>
              <textarea className="form-control customer" id="note" rows="3"></textarea>
            </div>
            <div className="col-lg-12 col-md-12">
              <button type="submit" className="btn btn-primary submit">GỬI ĐI</button>
            </div>
          </div>
        </form>
      </div>
  )
}

const RadioForm = ({question,answers}) => {
  return(
    <div className="row">
      <div className="form-group col-md-12">
        <input type="email" className="form-control feedback" id="email" value={question} disabled/>
      </div>
      <div className="form-group col-xs-12 col-sm-12 col-md-12">
        {
          answers.map((item,index)=>(
            <div key={index} className="form-group col-xs-12 col-sm-12 col-md-4">
              <input type="radio" name="inlineRadioOptions" id="option" autoComplete="off" />
              <div className="btn-group">
                  <label className="btn btn-success">
                      <span className="glyphicon glyphicon-ok"></span>
                      <span> </span>
                  </label>
                  <label className="btn btn-default active">
                      {item.answer}
                  </label>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

const CheckboxForm = ({answers, question}) =>{
  return(
    <div className="row">
      <div className="form-group col-md-12">
        <input type="text" className="form-control" id="exampleInputName2" value={question} disabled/>
      </div>
      <div className="form-group col-md-12">
        {answers.map((item,index)=>(
          <div key={index} className="col-md-4">
            <div className="row">
              <div className="btn-group">
                <label className="btn btn-success">
                  <input type="checkbox" name="fancy-checkbox-danger-custom-icons" id="fancy-checkbox-danger-custom-icons" autoComplete="off" />  
                  <span className="glyphicon glyphicon-ok"></span>
                </label>
                <label className="btn btn-default active">
                  {item.answer}
                </label>
              </div>
	          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

const TextareaForm = ({question}) =>{
  return(
    <div className="row">
      <div className="form-group col-md-12">
        <input type="text" className="form-control" id="exampleInputName2" value={question} disabled/>
        <textarea className="form-control answer" id="description" rows="3" placeholder="Your feedback here!"/>
      </div>
    </div>
  )
}

const SurveyForm = ({data}) => {
  
  return(
      <div className="col-md-12">
        <h3>KHẢO SÁT CHẤT LƯỢNG SẢN PHẨM RICH'S</h3>
        <form className="form-survey col-md-10">
          {
            data.map((item,index)=>{
              switch(item.type){
                case "checkbox":
                  return <CheckboxForm key={index} question={item.question} answers={item.answers}/>
                case "radio":
                  return <RadioForm key={index} question={item.question} answers={item.answers}/>
                case "text":
                  return <TextareaForm key={index} question={item.question}/>
                default:
                  return ''
              }
            })
          }
        </form>
      </div>
  )
}

class Survey extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      checked: true,
    }
  }

  checkboxHandler = (e) => {
    this.setState({
      checked: e.target.checked
    });
  }
  
  render(){
    const imgStyle = {
    background: `url(${"https://www.milkmaid.in/Images/Recipe/Chocolate%20694x400_11.JPG"}) no-repeat`,
    backgroundSize:"cover",
    display:"flex",
    textAlign:"center",
  }
    return(
      <div className="col-lg-12 col-md-12">
        <div className="col-lg-4 col-md-4">
          <CustomerInfoForm/>
          <br/>
        </div>
        <div style={imgStyle} className="col-lg-8 col-md-8">
          <SurveyForm data={this.props.data}/>
        </div>
      </div>
    )
  }
}

export default Survey;