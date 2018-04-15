import React, { PureComponent } from "react"
import CakeImg from "../../images/cake2.jpg"

const province = [
  { key: "HCM", text: "Hồ Chí Minh" },
  { key: "HN", text: "Hà Nội" },
  { key: "DN", text: "Đà Nẵng" },
  { key: "CT", text: "Cần Thơ" },
  { key: "HP", text: "Hải Phòng" },
  { key: "CM", text: "Cà Mau" },
  { key: "BT", text: "Bến Tre" },
  { key: "LA", text: "Long An" },
  { key: "BMT", text: "Buôn Mê Thuột" },
  { key: "H", text: "Huế" },
  { key: "HA", text: "Hội An" }
]

class CustomerInfoForm extends PureComponent {
  static business = ["Bakery", "Food Service", "Ratiler"]

  render() {
    const { opts, onSubmit } = this.props

    return (
      <div className="form-customer ">
        <h3 className="customer col-lg-12 col-md-12">THÔNG TIN KHÁCH HÀNG</h3>
        <div>
          <div className="row">
            <div className="form-group col-lg-12 col-md-12">
              <label>TÊN CÔNG TY</label>
              <input
                ref={node => (this.company = node)}
                type="text"
                className="form-control customer"
                id="name"
              />
            </div>
            <div className="form-group col-lg-12 col-md-12">
              <label>TỈNH THÀNH</label>
              <select
                ref={node => (this.city = node)}
                className="form-control customer"
              >
                {province.map((item, index) => (
                  <option key={index}>{item.text}</option>
                ))}
              </select>
            </div>
            <div className="form-group col-lg-12 col-md-12">
              <label>HÌNH THỨC KINH DOANH</label>
            </div>
            <div className="form-group col-lg-12 col-md-12">
              {CustomerInfoForm.business.map((item, index) => (
                <label key={index} className="checkbox-wrapper col-md-6">
                  {item}
                  <input type="checkbox" ref={node => (this[index] = node)} />
                  <span className="checkmark" />
                </label>
              ))}
              <div className="col-md-6" style={{ paddingLeft: 0 }}>
                <label
                  className="checkbox-wrapper col-md-6"
                  style={{ display: "inline-block" }}
                >
                  <p id={"other0Text"}>Others</p>
                  <input
                    ref={node => (this.others = node)}
                    type="checkbox"
                    onClick={() => opts.openOther(`other0`)}
                  />
                  <span className="checkmark" />
                </label>
                <textarea
                  ref={node => (this.othersInput = node)}
                  rows={2}
                  id={"other0"}
                  placeholder="Others"
                  className="form-control others hideInput"
                />
              </div>
            </div>

            <div className="form-group col-lg-6 col-md-6">
              <label>TÊN NGƯỜI LIÊN HỆ</label>
              <input
                type="text"
                ref={node => (this.name = node)}
                className="form-control customer"
                id="workplace"
              />
            </div>
            <div className="form-group col-lg-6 col-md-6">
              <label>SỐ ĐIỆN THOẠI</label>
              <input
                ref={node => (this.phone = node)}
                type="text"
                className="form-control customer"
                id="phone"
              />
            </div>
            <div className="col-lg-12 hidden-xs hidden-sm col-md-12">
              <button onSubmit={onSubmit} className="btn btn-primary submit">
                GỬI ĐI
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class YesNoForm extends PureComponent {
  render() {
    const { data, count } = this.props
    return (
      <div className="row">
        <div className="form-group col-md-12">
          <div className="questionBox">{count + ". " + data.description}</div>
        </div>
        <div className="form-group col-xs-12 col-sm-12 col-md-12">
          {data.answer.map((item, index) => (
            <label
              key={index}
              className="radio-wrapper col-xs-6 col-sm-6 col-md-4"
            >
              {item}
              <input
                type="radio"
                name={data.id}
                ref={node => (this[index] = node)}
              />
              <span className="checkmark-radio" />
            </label>
          ))}
        </div>
      </div>
    )
  }
}

class OthersInput extends PureComponent {
  render() {
    const { data, onClickItem } = this.props

    return (
      <div className="col-xs-12 col-md-6" style={{ paddingLeft: 0 }}>
        <label className="checkbox-wrapper col-xs-12 col-md-6">
          <input
            type="checkbox"
            ref={node => (this.checkbox = node)}
            onClick={() => onClickItem(`other${data.id}`)}
          />
          <p id={`other${data.id}Text`}>Others</p>
          <span className="checkmark" />
        </label>
        <textarea
          rows="2"
          ref={node => (this.input = node)}
          id={`other${data.id}`}
          className="col-xs-12 col-md-6 form-control others hideInput"
          placeholder="Others"
        />
      </div>
    )
  }
}

class MultipleChoiceForm extends PureComponent {
  render() {
    const { data, opts, count } = this.props

    return (
      <div className="row">
        <div className="form-group col-md-12">
          <div className="questionBox">{count + ". " + data.description}</div>
        </div>
        <div className="form-group col-md-12">
          {data.answer.map((item, index) => (
            <label key={index} className="checkbox-wrapper col-xs-12 col-md-6">
              {item}
              <input type="checkbox" ref={node => (this[index] = node)} />
              <span className="checkmark" />
            </label>
          ))}
          <OthersInput
            ref={node => (this[data.answer.length] = node)}
            data={data}
            onClickItem={selector => opts.openOther(selector)}
          />
        </div>
      </div>
    )
  }
}

class ShortTextForm extends PureComponent {
  render() {
    const { question, count } = this.props

    return (
      <div className="form-textarea row">
        <div className="form-group col-md-12">
          <div className="questionBox">{count + ". " + question}</div>
          <textarea
            ref={node => (this.input = node)}
            className="form-control answer"
            id="description"
            rows="3"
            placeholder="Your feedback here!"
          />
        </div>
      </div>
    )
  }
}

class SurveyForm extends PureComponent {
  render() {
    const { data, opts } = this.props

    return (
      <div className="form-survey col-md-12">
        <h3>KHẢO SÁT CHẤT LƯỢNG SẢN PHẨM RICH'S</h3>
        <form className=" col-md-offset-1 col-md-10">
          {data.map((item, index) => {
            switch (item.questionType) {
              case "checkbox":
                return (
                  <MultipleChoiceForm
                    opts={opts}
                    key={index}
                    data={item}
                    count={index + 1}
                    ref={node => (this[index] = node)}
                  />
                )
              case "radio":
                return (
                  <YesNoForm
                    key={index}
                    data={item}
                    count={index + 1}
                    ref={node => (this[index] = node)}
                  />
                )
              case "normal":
                return (
                  <ShortTextForm
                    key={index}
                    question={item.description}
                    count={index + 1}
                    ref={node => (this[index] = node)}
                  />
                )
              default:
                return ""
            }
          })}
        </form>
      </div>
    )
  }
}

class Survey extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      checked: true,
      click: false
    }
  }

  checkboxHandler = e => {
    this.setState({
      checked: e.target.checked
    })
  }

  onClickHandle = selector => {
    var x = document.getElementById(selector).classList
    var y = document.getElementById(`${selector}Text`).classList

    if (x.contains("hideInput")) {
      x.remove("hideInput")
      y.add("hideText")
    } else {
      x.add("hideInput")
      y.remove("hideText")
    }
  }

  render() {
    const imgStyle = {
      background: `url(${CakeImg}) no-repeat`,
      backgroundSize: "cover",
      textAlign: "center",
      backgroundPosition: "center"
    }
    const opts = {
      openOther: selector => this.onClickHandle(selector)
    }

    return (
      <div className="row">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="col-lg-4 col-md-4">
              <CustomerInfoForm
                ref={node => (this.customerInfo = node)}
                opts={opts}
                onSubmit={this._handleSubmitForm}
              />
              <br />
            </div>
            <div style={imgStyle} className="blur-background col-lg-8 col-md-8">
              <SurveyForm
                data={this.props.data}
                ref={node => (this.surveyForm = node)}
                opts={opts}
              />
            </div>
            <button
              className="hidden-md hidden-lg btn btn-primary submit-survey"
              style={{ borderRadius: 0 }}
              onClick={this._handleSubmitForm}
            >
              GỬI ĐI
            </button>
          </div>
        </div>
      </div>
    )
  }

  _handleSubmitForm = e => {
    e.preventDefault()
    const { data, onSubmitSurvey, surveyTitle } = this.props

    /* Get Customer Info */
    const business = []
    CustomerInfoForm.business.forEach((item, index) => {
      if (this.customerInfo[index].checked) {
        business.push(item)
      }
      if (index === CustomerInfoForm.business.length - 1) {
        if (this.customerInfo.others.checked) {
          business.push(this.customerInfo.othersInput.value)
        }
      }
    })
    const customer = {
      name: this.customerInfo.name.value,
      email: ".",
      phone: this.customerInfo.phone.value,
      city: this.customerInfo.city.value,
      company: this.customerInfo.company.value,
      business: business.join(";")
    }

    /* Get Survey Info */
    const survey = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].questionType === "normal") {
        survey.push({
          question: data[i].description,
          answer: this.surveyForm[i].input.value,
          customer: customer.name
        })
      } else if (data[i].questionType === "checkbox") {
        const checkboxAns = []
        data[i].answer.forEach((ans, index) => {
          if (this.surveyForm[i][index].checked) {
            checkboxAns.push(ans)
          }
          if (
            index === data[i].answer.length - 1 &&
            this.surveyForm[i][index + 1].checkbox.checked
          ) {
            checkboxAns.push(this.surveyForm[i][index + 1].input.value)
          }
        })
        survey.push({
          question: data[i].description,
          answer: checkboxAns.join(";"),
          customer: customer.name
        })
      } else {
        const checkboxAns = []
        data[i].answer.forEach((ans, index) => {
          if (this.surveyForm[i][index].checked) {
            checkboxAns.push(ans)
          }
        })
        survey.push({
          question: data[i].description,
          answer: checkboxAns.join(";"),
          customer: customer.name
        })
      }
    }

    onSubmitSurvey({
      customer,
      survey: {
        title: surveyTitle,
        questions: survey
      }
    })
  }
}

export default Survey
