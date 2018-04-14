import React, { PureComponent } from "react"
import Modal from "react-responsive-modal"
import { addNewSurvey } from "../actions/survey"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

const questionTypes = ["normal", "radio", "checkbox"]

const generateQuestionTypes = () =>
  questionTypes.map(type => (
    <option key={type} value={type}>
      {type}
    </option>
  ))

const ModalAnswer = ({ open, onClose, onConfirm }) => {
  const _handleConfirm = () => {
    const answer = this.answer.value

    answer && onConfirm(answer)
  }

  return (
    <Modal open={open} onClose={onClose}>
      <h2>Add New Answer</h2>
      <div className="form-group">
        <textarea
          ref={node => (this.answer = node)}
          className="form-control"
          id="answer"
          placeholder="Answer"
        />
      </div>
      <div className="text-center">
        <button
          className="btn btn-primary text-center"
          onClick={_handleConfirm}
        >
          Confirm
        </button>
      </div>
    </Modal>
  )
}

class ModalQuestion extends PureComponent {
  initState = {
    currentType: questionTypes[0],
    answers: [],
    open: false
  }

  state = { ...this.initState }

  render() {
    const { currentType, answers, open } = this.state

    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <h2>Add New Question</h2>
        <div className="form-group">
          <label style={{ marginRight: 10 }} htmlFor="current-type">
            Question Type
          </label>
          <select
            className="pull-right"
            value={currentType}
            id="current-type"
            onChange={this._handleChangeType}
          >
            {generateQuestionTypes()}
          </select>
        </div>
        <div className="form-group">
          <textarea
            ref={node => (this.question = node)}
            className="form-control"
            id="question"
            placeholder="Question"
          />
        </div>
        {currentType !== "normal" && (
          <div>
            <label htmlFor="answers">Answers</label>
            <button
              className="btn btn-success text-center pull-right"
              onClick={this._handleOpenModalAnswer}
            >
              Add
            </button>
            <ul id="answers">{answers.map(ans => <li key={ans}>{ans}</li>)}</ul>
          </div>
        )}
        <div className="text-center">
          <button
            onClick={this._handleConfirm}
            className="btn btn-primary text-center"
          >
            Confirm
          </button>
        </div>
        <ModalAnswer
          open={open}
          onClose={this._handleCloseModalAnswer}
          onConfirm={this._handleAddAnswer}
        />
      </Modal>
    )
  }

  _handleOpenModalAnswer = () =>
    this.setState({
      open: true
    })

  _handleCloseModalAnswer = () =>
    this.setState({
      open: false
    })

  _handleChangeType = e => {
    this.setState({
      currentType: e.target.value
    })
  }

  _handleAddAnswer = ans =>
    this.setState({
      answers: this.state.answers.concat(ans),
      open: false
    })

  _handleConfirm = () => {
    const { currentType, answers } = this.state
    const { data } = this.props
    const question = this.question.value

    if (question && currentType) {
      if (currentType === "normal") {
        this.props.onConfirm({
          id: data && data.id,
          question,
          type: currentType,
          answers: null
        })

        this.setState(this.initState)
      } else {
        if (!!answers.length) {
          this.props.onConfirm({
            id: data && data.id,
            question,
            type: currentType,
            answers
          })

          this.setState(this.initState)
        }
      }
    }
  }
}

@connect(
  state => ({
    isLoading: state.survey.isLoading
  }),
  dispatch => ({
    addNewSurvey: bindActionCreators(addNewSurvey, dispatch)
  })
)
class AdminSurveyNew extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      data: (props.data && props.data.questions) || []
    }
  }

  generateContent = data => {
    return data.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.question}</td>
          <td>{item.type}</td>
          <td>
            {item.answers && (
              <ul>
                {item.answers.map(ans => (
                  <li key={`${item.id}_${ans}`}>{ans}</li>
                ))}
              </ul>
            )}
          </td>
          <td className="text-right">
            <button
              className="btn btn-danger"
              onClick={() => this._handleDeleteQuestion(item.id)}
            >
              X
            </button>
          </td>
        </tr>
      )
    })
  }

  render() {
    const { data, open } = this.state
    const { data: oldData } = this.props

    return (
      <div className="container">
        <h1>{oldData ? "Edit Survey" : "Add New Survey"}</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th>Type</th>
              <th className="text-center">Answer</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.generateContent(data)}</tbody>
        </table>
        <button
          className="btn btn-success btn-add"
          onClick={this._handleOpenModal}
        >
          Add New Question
        </button>
        <ModalQuestion
          open={open}
          onClose={this._handleCloseModal}
          onConfirm={this._handleAddQuestion}
        />
        {!!data.length && (
          <div className="text-center">
            {oldData ? (
              <button className="btn btn-primary">Confirm Edit</button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={this._handleCreateSurvey}
              >
                Create Survey
              </button>
            )}
          </div>
        )}
      </div>
    )
  }

  _handleDeleteQuestion = id => {
    const { data } = this.state
    return this.setState({
      data: data.filter(i => i.id !== id)
    })
  }

  _handleCreateSurvey = e => {
    e.preventDefault()

    console.log(this.state.data)
    addNewSurvey(this.state.data)
  }

  _handleAddQuestion = question => {
    const { data } = this.state
    const newId = !!data.length ? data[data.length - 1].id + 1 : 1

    return this.setState({
      data: data.concat({ ...question, id: newId }),
      open: false
    })
  }

  _handleOpenModal = () =>
    this.setState({
      open: true
    })

  _handleCloseModal = () =>
    this.setState({
      open: false
    })
}

export default AdminSurveyNew
