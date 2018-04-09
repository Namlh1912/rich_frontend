import React, { PureComponent } from "react"
import Slider from "react-slick"

const settings = {
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  dots: true,
  infinite: false,
  arrows: false
}

const SliderItem = ({ data, index }) => {
  const imgStyle = {
    background: `url(${data.image}) no-repeat center center`,
    width: "100%",
    paddingBottom: "100%",
    backgroundSize: "cover"
  }

  return data.isNull ? (
    <div className="slider-item col-xs-12 col-sm-12 col-md-6 col-lg-6" />
  ) : data.isForm ? (
    <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
      this is a test
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
              <div className="item-title">{data.title}</div>
              <div className="item-description">{data.description}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
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
      data: formatData(props.data)
    }
  }

  componentWillReceiveProps(props) {
    const { data } = this.props

    if (data !== props.data) {
      this.setState({
        data: formatData(props.data)
      })
    }
  }

  render() {
    const { data } = this.state

    return (
      <div className="products-slider">
        <Slider {...settings}>
          {data.map((item, index) => {
            return <SliderItem key={item.id} data={item} index={index} />
          })}
        </Slider>
      </div>
    )
  }
}

export default ProductsSlider