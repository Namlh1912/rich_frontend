import React, { PureComponent } from "react";
import ProductsSlider from "../components/ProductsSlider";
import DonutImg from "../../images/donut.jpg";
import YogurtImg from "../../images/yogurt.jpg";
import CakeImg from "../../images/cake.jpg";

const productDataDetail = [
  {
    id: "1",
    title: "Yogurt",
    image: YogurtImg,
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum "
  },
  {
    id: "2",
    title: "Cake",
    image: CakeImg,
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum "
  },
  {
    id: "3",
    title: "Donut",
    image: DonutImg,
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum "
  },
  {
    id: "4",
    title: "Cake",
    image: CakeImg,
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum "
  },
  {
    id: "5",
    title: "Cake",
    image: CakeImg,
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum "
  },
  {
    id: "6",
    title: "Burger",
    image: "https://www.milkmaid.in/Images/Recipe/Chocolate%20694x400_11.JPG",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum "
  },
  {
    id: "7",
    title: "Burger",
    image: "https://www.milkmaid.in/Images/Recipe/Chocolate%20694x400_11.JPG",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid qui doloribus maiores nam earum delectus numquam! Quidem est, ab molestias repudiandae repellat voluptas ullam, esse magni doloribus ipsum alias!"
  }
];

class Products extends PureComponent {
  render() {
    return (
      <div id="products" className="container">
        <ProductsSlider data={productDataDetail} />
      </div>
    );
  }
}

export default Products;
