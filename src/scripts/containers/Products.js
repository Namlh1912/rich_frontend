import React, { PureComponent } from "react";
import ProductsSlider from "../components/ProductsSlider";
import Logo from "../../images/yogurt.jpg";

const productDataDetail = [
  {
    id: "1",
    title: "Burger",
    image: "../../images/yogurt.jpg",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum "
  },
  {
    id: "2",
    title: "Sandwich",
    image: "https://www.milkmaid.in/Images/Recipe/Chocolate%20694x400_11.JPG",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum "
  },
  {
    id: "3",
    title: "Hotdog",
    image: "https://www.milkmaid.in/Images/Recipe/Chocolate%20694x400_11.JPG",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum "
  },
  {
    id: "4",
    title: "Rice",
    image: "https://www.milkmaid.in/Images/Recipe/Chocolate%20694x400_11.JPG",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum "
  },
  {
    id: "5",
    title: "Nugget-chicken",
    image: "https://www.milkmaid.in/Images/Recipe/Chocolate%20694x400_11.JPG",
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
