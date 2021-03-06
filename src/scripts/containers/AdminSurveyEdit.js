import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import AdminSurveyNew from "./AdminSurveyNew"
import { getSurvey } from "../actions/survey"

@connect(
  (state, props) => ({
    survey: state.survey.survey,
    surveyId: parseInt(props.params.id, 10),
    isLoading: state.survey.isLoading
  }),
  dispatch => ({
    getSurvey: bindActionCreators(getSurvey, dispatch)
  })
)
class AdminSurveyEdit extends PureComponent {
  render() {
    const { survey, surveyId } = this.props

    return survey && survey.id === surveyId ? (
      <AdminSurveyNew data={survey} surveyId={surveyId} />
    ) : (
      <div>Loading...</div>
    )
  }

  componentDidMount() {
    const { getSurvey, surveyId } = this.props

    getSurvey(surveyId)
  }
}

export default AdminSurveyEdit
