import React from "react";
import QuestionList from "./QuestionList";
const uuidv4 = require("uuid/v4");

class QuestionListContainer extends React.Component {
  constructor({ questions }) {
    super();
    this.state = {
      questions: this.reindex(questions),
      newQuestionType: "FILL_IN",
      newQuestionValue: "",
      defaultQuestionValue: "enter question"
    };
    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.newQuestionType = this.newQuestionType.bind(this);
    this.newQuestionValue = this.newQuestionValue.bind(this);
  }

  reindex(questions) {
    var newQuestions = questions
      .sort(function(a, b) {
        return a.index - b.index;
      })
      .map(function(q, idx) {
        if (!q.key) {
          q.key = uuidv4();
        }
        q.index = idx;
        return q;
      });
    return newQuestions;
  }

  addQuestion(e) {
    e.preventDefault();
    var newQuestions = this.state.questions.slice(0);
    newQuestions = newQuestions.concat([
      {
        type: this.state.newQuestionType,
        value: this.state.newQuestionValue,
        choices: [],
        key: uuidv4()
      }
    ]);
    this.setState({
      questions: this.reindex(newQuestions),
      newQuestionValue: this.state.defaultQuestionValue
    });
  }

  newQuestionType(e) {
    let newType = e.target.value;
    this.setState({ newQuestionType: newType });
  }

  newQuestionValue(e) {
    let newValue = e.target.value;
    this.setState({ newQuestionValue: newValue });
  }

  deleteQuestion(index, e) {
    e.preventDefault();
    var newQuestions = this.state.questions.slice(0);
    newQuestions.splice(index, 1);
    this.setState({ questions: newQuestions });
  }

  updateQuestion(question, index, e) {
    question.value = e.target.value;
  }

  render() {
    return (
      <QuestionList
        questions={this.state.questions}
        newQuestionType={this.state.newQuestionType}
        newQuestionValue={
          this.state.newQuestionValue || this.state.defaultQuestionValue
        }
        newQuestionTypeHandler={this.newQuestionType}
        newQuestionValueHandler={this.newQuestionValue}
        addHandler={this.addQuestion}
        deleteHandler={this.deleteQuestion}
        updateHandler={this.updateQuestion}
      />
    );
  }
}
export default QuestionListContainer;
