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

export function getSurvey(id) {
  if (id) {
    return dispatch => {
      dispatch({
        type: "GET_SURVEY_SUCCESS",
        res: survey
      })
    }
  }

  return dispatch => {
    dispatch({
      type: "GET_SURVEY_FAILURE",
      error: "Invalid Survey!"
    })
  }
}
