import React, { PureComponent } from "react";
import SurveyForm from "../components/SurveyForm";

const surveyDataDetail = [
  {
    id: "1",
    question: "Bạn có đang sử dụng sản phẩm của rich",
    type: "radio",
    answers: [{ answer: "Có" }, { answer: "Không" }]
  },
  {
    id: "2",
    question: "Nhóm sản phẩm khách hàng quan tâm:",
    type: "checkbox",
    answers: [
      { answer: "TCCS/Kem" },
      { answer: "Bakery mix/ Bột" },
      { answer: "FFIGSS/ Mứt, siro, sốt" },
      { answer: "Chocolate/ Socola" }
    ]
  },
  {
    id: "3",
    question: "Ứng dụng khách quan tâm",
    type: "checkbox",
    answers: [
      { answer: "Beverage/ Các món thức uống" },
      { answer: "Cake-Dessert/ Các món bánh - tráng miệng" },
      { answer: "Culinary/ Các món nấu" }
    ]
  },
  {
    id: "4",
    question: "Yêu cầu của khách hàng",
    type: "text",
    answer: []
  },
  {
    id: "5",
    question: "Ứng dụng khách quan tâm",
    type: "checkbox",
    answers: [
      { answer: "Beverage/ Các món thức uống" },
      { answer: "Cake-Dessert/ Các món bánh - tráng miệng" },
      { answer: "Culinary/ Các món nấu" }
    ]
  },
  {
    id: "6",
    question: "Ứng dụng khách quan tâm",
    type: "checkbox",
    answers: [
      { answer: "Beverage/ Các món thức uống" },
      { answer: "Cake-Dessert/ Các món bánh - tráng miệng" },
      { answer: "Culinary/ Các món nấu" }
    ]
  },
  {
    id: "7",
    question: "Ứng dụng khách quan tâm",
    type: "checkbox",
    answers: [
      { answer: "Beverage/ Các món thức uống" },
      { answer: "Cake-Dessert/ Các món bánh - tráng miệng" },
      { answer: "Culinary/ Các món nấu" }
    ]
  },
  {
    id: "8",
    question: "Ứng dụng khách quan tâm",
    type: "checkbox",
    answers: [
      { answer: "Beverage/ Các món thức uống" },
      { answer: "Cake-Dessert/ Các món bánh - tráng miệng" },
      { answer: "Culinary/ Các món nấu" }
    ]
  }
];

class Surveys extends PureComponent {
  render() {
    return (
      <div id="surveys" className="container-fluid">
        <SurveyForm data={surveyDataDetail} />
      </div>
    );
  }
}

export default Surveys;
