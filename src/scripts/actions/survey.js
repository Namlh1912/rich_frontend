import callApi from "./api"

const survey = {
  id: "1",
  title: "User-survey",
  questions: [
    {
      id: 1,
      question: "This is burger",
      type: "radio",
      answers: ["yes", "no"]
    },
    {
      id: 2,
      question: "Types of burger",
      type: "checkbox",
      answers: ["Chicken", "Bulgogi", "Pork"]
    },
    {
      id: 3,
      question: "Your choices?",
      type: "normal",
      answer: []
    }
  ]
}

export function getAllSurveys() {
  return dispatch => {
    callApi(dispatch, "GET_SURVEYS", "/surveys", {})
  }
}

export function getSurvey(id) {
  return dispatch => {
    callApi(dispatch, "GET_SURVEY_DETAIL", "/survey/" + id, {})
  }
}
