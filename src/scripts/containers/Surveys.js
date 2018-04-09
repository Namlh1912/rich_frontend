import React, { PureComponent } from 'react';
import SurveyForm from "../components/SurveyForm"

const surveyDataDetail = [
  {
    id: "1",
    question: "This is burger",
    type:"radio",
    answers:[
      {answer:"Có"},
      {answer:"Không"}
    ]
  },
  {
    id:"2",
    question: "Types of burger",
    type:"checkbox",
    answers:[
      { answer:"Chicken" },
      { answer:"Bulgogi" },
      { answer:"Pork" },
    ],
  },
  {
    id:"3",
    question: "Your choices?",
    type:"text",
    answer:[],
  },
  {
    id:"4",
    question: "Types of burger",
    type:"checkbox",
    answers:[
      { answer:"Chicken" },
      { answer:"Bulgogi" },
      { answer:"Pork" },
    ],
  },
  {
    id:"5",
    question: "Types of burger",
    type:"checkbox",
    answers:[
      { answer:"Chicken" },
      { answer:"Bulgogi" },
      { answer:"Pork" },
    ],
  },
  {
    id:"6",
    question: "Types of burger",
    type:"checkbox",
    answers:[
      { answer:"Chicken" },
      { answer:"Bulgogi" },
      { answer:"Pork" },
    ],
  },
  {
    id: "7",
    question: "This is burger",
    type:"radio",
    answers:[
      {answer:"Có"},
      {answer:"Không"}
    ]
  },
  {
    id: "8",
    question: "This is burger",
    type:"radio",
    answers:[
      {answer:"Có"},
      {answer:"Không"}
    ]
  },
  {
    id: "9",
    question: "This is burger",
    type:"radio",
    answers:[
      {answer:"Có"},
      {answer:"Không"}
    ]
  },
  {
    id:"10",
    question: "Types of burger",
    type:"checkbox",
    answers:[
      { answer:"Chicken" },
      { answer:"Bulgogi" },
      { answer:"Pork" },
    ],
  },
  {
    id:"11",
    question: "Types of burger",
    type:"checkbox",
    answers:[
      { answer:"Chicken" },
      { answer:"Bulgogi" },
      { answer:"Pork" },
    ],
  },
  {
    id:"12",
    question: "Your choices?",
    type:"text",
    answer:[],
  },
  {
    id:"13",
    question: "Your choices?",
    type:"text",
    answer:[],
  },
  {
    id:"14",
    question: "Types of burger",
    type:"checkbox",
    answers:[
      { answer:"Chicken" },
      { answer:"Bulgogi" },
      { answer:"Pork" },
    ],
  },
  {
    id:"15",
    question: "Types of burger",
    type:"checkbox",
    answers:[
      { answer:"Chicken" },
      { answer:"Bulgogi" },
      { answer:"Pork" },
    ],
  },
]

class Surveys extends PureComponent{
  render(){
    return(
      <div id="surveys" className="container-fluid">
        <SurveyForm data={surveyDataDetail} />
      </div>
    )
  }
}

export default Surveys;