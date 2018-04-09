import React, { PureComponent } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import AdminSurveyNew from "./AdminSurveyNew"
import { getSurvey } from "../actions/survey"

@connect(
  state => ({
    survey: state.survey.data
  }),
  dispatch => ({
    getSurvey: bindActionCreators(getSurvey, dispatch)
  })
)
class AdminSurveyEdit extends PureComponent {
  constructor() {
    super()

    this.state = {
      data: null
    }
  }

  render() {
    const { data } = this.state

    return data ? <AdminSurveyNew data={data} /> : <div>Loading...</div>
  }

  componentWillReceiveProps(props) {
    const { params } = this.props

    if (params.id) {
      if (props.survey && params.id === props.survey.id) {
        this.setState({
          data: props.survey
        })
      }
    }
  }

  componentDidMount() {
    const { getSurvey, params } = this.props

    getSurvey(params.id)
  }
}

export default AdminSurveyEdit
