import React, { PureComponent } from "react";
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

const CustomerInfoForm = () => {
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
            <label className="checkbox-wrapper col-md-6">
              <input type="checkbox" />
              <input
                type="text"
                placeholder="Others"
                className="form-control"
              />
              <span className="checkmark" />
            </label>
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
          <div className=" hidden-xs col-lg-12 col-md-12">
            <button type="submit" className="btn btn-primary submit">
              GỬI ĐI
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const RadioForm = ({ data, id }) => {
  return (
    <div className="row">
      <div className="form-group col-md-12">
        <input
          type="text"
          className="form-control question"
          id="email"
          value={id + ". " + data.question}
          disabled
        />
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

const CheckboxForm = ({ data, id }) => {
  return (
    <div className="row">
      <div className="form-group col-md-12">
        <input
          type="text"
          className="form-control question"
          id="exampleInputName2"
          value={id + ". " + data.question}
          disabled
        />
      </div>
      <div className="form-group col-md-12">
        {data.answers.map((item, index) => (
          <label
            key={index}
            className="checkbox-wrapper col-xs-12 col-sm-12 col-md-6"
          >
            {item.answer}
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        ))}
        <label className="checkbox-wrapper col-md-6">
          <input
            type="checkbox"
            onClick={() => this.openOther(`other${data.id}`)}
          />

          <span className="checkmark" />
          <input
            id={`other${data.id}`}
            style={{ visibility: "hidden" }}
            type="text"
            placeholder="Others"
            className="form-control"
          />
        </label>
      </div>
    </div>
  );
};

{
  /* <label
          key={`other${data.id}`}
          className="checkbox-wrapper col-xs-12 col-sm-12 col-md-6"
        >
          Other
          <input
            type="checkbox"
            onClick={() => this.openOther(`other${data.id}`)}
          />
          <span className="checkmark" />
        </label>
        {data.type === "checkbox" ? (
          <div id={`other${data.id}`} style={{ visibility: "hidden" }}>
            ahihi
          </div>
        ) : (
          ""
        )} */
}

const TextareaForm = ({ question, id }) => {
  return (
    <div className="form-textarea row">
      <div className="form-group col-md-12">
        <input
          type="text"
          className="form-control question"
          id="exampleInputName2"
          value={id + ". " + question}
          diabled
        />
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

const SurveyForm = ({ data }) => {
  var count = 0;
  return (
    <div className="form-survey col-md-12">
      <h3>KHẢO SÁT CHẤT LƯỢNG SẢN PHẨM RICH'S</h3>
      <form className=" col-md-offset-1 col-md-10">
        {data.map((item, index) => {
          count++;
          switch (item.type) {
            case "checkbox":
              return <CheckboxForm key={index} data={item} id={count} />;
            case "radio":
              return <RadioForm key={index} data={item} id={count} />;
            case "text":
              return (
                <TextareaForm key={index} question={item.question} id={count} />
              );
            default:
              return "";
          }
        })}
      </form>
    </div>
  );
};

class Survey extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  checkboxHandler = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  openOther(selector) {
    document.getElementById(selector).style.visibility = "visible";
  }

  render() {
    const imgStyle = {
      background: `url(${CakeImg}) no-repeat`,
      backgroundSize: "cover",
      textAlign: "center",
      backgroundPosition: "center"
    };
    return (
      <div className="row">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="col-lg-4 col-md-4">
              <CustomerInfoForm />
              <br />
            </div>
            <div style={imgStyle} className="blur-background col-lg-8 col-md-8">
              <SurveyForm data={this.props.data} />
            </div>
          </div>

          <div class="col-xs-12 hidden-md hidden-sm hidden-lg col-sm-6 hidden-sm col-md-6">
            <button type="submit" className="btn btn-primary submit-survey">
              GỬI ĐI
            </button>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Survey;
