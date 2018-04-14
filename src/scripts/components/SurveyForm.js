import React, { Component } from "react";
import CakeImg from "../../images/cake2.jpg";

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
];

const CustomerInfoForm = ({ opts }) => {
  return (
    <div className="form-customer ">
      <h3 className="customer col-lg-12 col-md-12">THÔNG TIN KHÁCH HÀNG</h3>
      <form>
        <div className="row">
          <div className="form-group col-lg-12 col-md-12">
            <label>TÊN CÔNG TY</label>
            <input type="text" className="form-control customer" id="name" />
          </div>
          <div className="form-group col-lg-12 col-md-12">
            <label>TỈNH THÀNH</label>
            <select className="form-control customer">
              {province.map((item, index) => (
                <option key={index}>{item.text}</option>
              ))}
            </select>
          </div>
          <div className="form-group col-lg-12 col-md-12">
            <label>HÌNH THỨC KINH DOANH</label>
          </div>
          <div className="form-group col-lg-12 col-md-12">
            <label className="checkbox-wrapper col-md-6">
              Bakery
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="checkbox-wrapper col-md-6">
              Food Service
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="checkbox-wrapper col-md-6">
              Ratiler
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <div className="col-md-6" style={{ paddingLeft: 0 }}>
              <label
                className="checkbox-wrapper col-md-6"
                style={{ display: "inline-block" }}
              >
                <p id={"other0Text"}>Others</p>
                <input
                  type="checkbox"
                  onClick={() => opts.openOther(`other0`)}
                />
                <span className="checkmark" />
              </label>
              <textarea
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
              className="form-control customer"
              id="workplace"
            />
          </div>
          <div className="form-group col-lg-6 col-md-6">
            <label>SỐ ĐIỆN THOẠI</label>
            <input type="text" className="form-control customer" id="phone" />
          </div>

          <div className="form-group col-lg-12 col-md-12">
            <label>GHI CHÚ</label>
            <textarea className="form-control customer" id="note" rows="3" />
          </div>
          <div className="col-lg-12 hidden-xs hidden-sm col-md-12">
            <button type="submit" className="btn btn-primary submit">
              GỬI ĐI
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const YesNoForm = ({ data, count }) => {
  return (
    <div className="row">
      <div className="form-group col-md-12">
        <div className="questionBox">{count + ". " + data.question}</div>
      </div>
      <div className="form-group col-xs-12 col-sm-12 col-md-12">
        {data.answers.map((item, index) => (
          <label
            key={index}
            className="radio-wrapper col-xs-6 col-sm-6 col-md-4"
          >
            {item.answer}
            <input type="radio" name={data.id} />
            <span className="checkmark-radio" />
          </label>
        ))}
      </div>
    </div>
  );
};

const OthersInput = ({ data, onClickItem }) => {
  return (
    <div className="col-xs-12 col-md-6" style={{ paddingLeft: 0 }}>
      <label className="checkbox-wrapper col-xs-12 col-md-6">
        <input type="checkbox" onClick={() => onClickItem(`other${data.id}`)} />
        <p id={`other${data.id}Text`}>Others</p>
        <span className="checkmark" />
      </label>
      <textarea
        rows="2"
        id={`other${data.id}`}
        className="col-xs-12 col-md-6 form-control others hideInput"
        placeholder="Others"
      />
    </div>
  );
};

const MultipleChoiceForm = ({ data, opts, count }) => {
  return (
    <div className="row">
      <div className="form-group col-md-12">
        <div className="questionBox">{count + ". " + data.question}</div>
      </div>
      <div className="form-group col-md-12">
        {data.answers.map((item, index) => (
          <label key={index} className="checkbox-wrapper col-xs-12 col-md-6">
            {item.answer}
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        ))}
        <OthersInput
          data={data}
          onClickItem={selector => opts.openOther(selector)}
        />
      </div>
    </div>
  );
};

const ShortTextForm = ({ question, count }) => {
  return (
    <div className="form-textarea row">
      <div className="form-group col-md-12">
        <div className="questionBox">{count + ". " + question}</div>
        <textarea
          className="form-control answer"
          id="description"
          rows="3"
          placeholder="Your feedback here!"
        />
      </div>
    </div>
  );
};

const SurveyForm = ({ data, opts }) => {
  var count = 0;
  return (
    <div className="form-survey col-md-12">
      <h3>KHẢO SÁT CHẤT LƯỢNG SẢN PHẨM RICH'S</h3>
      <form className=" col-md-offset-1 col-md-10">
        {data.map((item, index) => {
          count++;
          switch (item.type) {
            case "checkbox":
              return (
                <MultipleChoiceForm
                  opts={opts}
                  key={index}
                  data={item}
                  count={count}
                />
              );
            case "radio":
              return <YesNoForm key={index} data={item} count={count} />;
            case "text":
              return (
                <ShortTextForm
                  key={index}
                  question={item.question}
                  count={count}
                />
              );
            default:
              return "";
          }
        })}
      </form>
    </div>
  );
};

class Survey extends Component {
  // pureComponent chi danh cho component khong co state
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      click: false
    };
  }

  checkboxHandler = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  onClickHandle = selector => {
    var x = document.getElementById(selector).classList;
    var y = document.getElementById(`${selector}Text`).classList;
    console.log(selector);
    console.log(x);
    console.log(x.contains("hideInput"));
    if (x.contains("hideInput")) {
      x.remove("hideInput");
      y.add("hideText");
    } else {
      x.add("hideInput");
      y.remove("hideText");
    }
  };

  render() {
    const imgStyle = {
      background: `url(${CakeImg}) no-repeat`,
      backgroundSize: "cover",
      textAlign: "center",
      backgroundPosition: "center"
    };
    const opts = {
      openOther: selector => this.onClickHandle(selector)
    };
    console.log(this.state.click);
    console.log(this.props.customerInfo);
    return (
      <div className="row">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="col-lg-4 col-md-4">
              <CustomerInfoForm opts={opts} />
              <br />
            </div>
            <div style={imgStyle} className="blur-background col-lg-8 col-md-8">
              <SurveyForm data={this.props.data} opts={opts} />
            </div>
            <button
              type="submit"
              className="hidden-md hidden-lg btn btn-primary submit-survey"
              style={{ borderRadius: 0 }}
            >
              GỬI ĐI
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Survey;
