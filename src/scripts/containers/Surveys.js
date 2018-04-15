import React, { PureComponent } from "react"
import SurveyForm from "../components/SurveyForm"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { getSurvey, submitSurvey } from "../actions/survey"

@connect(
  (state, props) => ({
    isLoading: state.survey.isLoading,
    survey: state.survey.survey,
    surveyId: parseInt(props.params.id, 10)
  }),
  dispatch => ({
    getSurvey: bindActionCreators(getSurvey, dispatch),
    submitSurvey: bindActionCreators(submitSurvey, dispatch)
  })
)
class Surveys extends PureComponent {
  render() {
    const { survey, surveyId } = this.props

    return survey && survey.id === surveyId ? (
      <div id="surveys" className="container-fluid">
        <SurveyForm
          data={survey.questions}
          surveyTitle={survey.title}
          onSubmitSurvey={this._handleSubmitSurvey}
        />
      </div>
    ) : (
      <div className="container">Loading...</div>
    )
  }

  componentDidMount() {
    const { surveyId, getSurvey } = this.props

    getSurvey(surveyId)
  }

  _handleSubmitSurvey = survey => {
    const { submitSurvey } = this.props

    submitSurvey(survey)
  }
}

export default Surveys
