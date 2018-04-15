import React, { PureComponent } from "react"
import Slider from "react-slick"
import StarRatingComponent from "react-star-rating-component"

const settings = {
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  dots: true,
  infinite: false,
  arrows: false
}

class SliderItem extends PureComponent {
  state = {
    rating: 0
  }

  _handleRating = next => {
    this.setState({ rating: next })
  }

  render() {
    const { data, index } = this.props
    const { rating } = this.state
    const imgStyle = {
      background: `url(${window.__BASE_IMG_URL__ +
        data.imgLink}) no-repeat center center`,
      width: "100%",
      paddingBottom: "100%",
      backgroundSize: "cover"
    }
    return data.isNull ? (
      <div className="slider-item col-xs-12 col-sm-12 col-md-6 col-lg-6" />
    ) : data.isForm ? (
      <div className="col-xs-12 col-sm-12 col-md-12">
        <div className="submit-form col-xs-12 col-sm-12 col-md-12">
          <p>Bạn đã hoàn thành survey!</p>
          <button
            type="submit"
            className="btn btn-primary submit-customer-survey"
            onClick={() => this._onSubmitCustomerForm()}
          >
            Hoàn thành
          </button>
        </div>
      </div>
    ) : (
      <div className="slider-item col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <table width="100%">
          <tbody>
            <tr>
              <td width="50%">
                <div className="slider-item-img" style={imgStyle} />
              </td>
              <td width="50%" className="slider-item-info">
                <div className="item-index">{`0${index + 1}.`}</div>
                <div className="item-title">{data.name}</div>
                <div className="item-description">{data.description}</div>
                <StarRatingComponent
                  name="rating1"
                  starCount={5}
                  value={rating}
                  onStarClick={this._handleRating}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const formatData = data => {
  const numb = 4 - data.length % 4
  const newData = [...data]

  if (numb !== 0) {
    for (let i = 0; i < numb; i++) {
      newData.push({
        id: new Date().getTime(),
        isNull: true
      })
    }
  }
  newData.push({
    id: new Date().getTime(),
    isForm: true
  })

  return newData
}

class ProductsSlider extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data:
        props.data && props.data.length ? formatData(props.data) : props.data
    }
  }

  componentWillReceiveProps(props) {
    const { data } = this.props

    if (data !== props.data) {
      this.setState({
        data:
          props.data && props.data.length ? formatData(props.data) : props.data
      })
    }
  }

  render() {
    const { data } = this.state

    return !!data.length ? (
      <div className="products-slider">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <SliderItem
                key={item.id}
                data={item}
                index={index}
                customerInfo={this.props.customerInfo}
              />
            )
          })}
        </Slider>
      </div>
    ) : (
      <div className="container">
        <h3>Không tồn tại sản phẩm!</h3>
      </div>
    )
  }
}

export default ProductsSlider
