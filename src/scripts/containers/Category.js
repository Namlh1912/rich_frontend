import React, { PureComponent } from "react";
import ProductsSlider from "../components/ProductsSlider";
import { getCategoryDetail } from "../actions/category";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FeedbackForm from "../components/FeedbackForm";

@connect(
  state => ({
    category: state.category.category
  }),
  dispatch => ({
    getCategoryDetail: bindActionCreators(getCategoryDetail, dispatch)
  })
)
class Category extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      view: 1,
      customerInfo: {}
    };
  }

  render() {
    const { category } = this.props;
    console.log(category);

    return this.state.view === 1 ? (
      <div className="col-lg-12 col-md-12">
        <FeedbackForm onItemClick={this.onHandleClick} />
      </div>
    ) : category ? (
      <div id="products" className="container">
        <ProductsSlider
          data={category.products}
          customerInfo={this.state.customerInfo}
        />
      </div>
    ) : null;
  }

  componentDidMount() {
    const { params, getCategoryDetail } = this.props;

    getCategoryDetail(params.id);
  }

  onHandleClick = data => {
    if (data) {
      this.setState({ view: 2, customerInfo: data });
    }
  };
}

export default Category;
