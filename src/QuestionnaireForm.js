import React, { Component } from "react";

import FillInQuestion from "./questions/FillInQuestion";
import ChooseManyQuestion from "./questions/ChooseManyQuestion";

const sampleData = {
  data: {
    author_id: 42,
    deleted: false,
    id: 1,
    name: "Your Profile",
    published: true,
    questions: [
      {
        choices: [
          {
            id: 4,
            index: 4,
            value: "Lizard"
          },
          {
            id: 3,
            index: 3,
            value: "Bird"
          },
          {
            id: 2,
            index: 2,
            value: "Cat"
          },
          {
            id: 1,
            index: 1,
            value: "Dog"
          }
        ],
        id: 7,
        index: 2,
        type: "CHOOSE_MANY",
        value: "What pets do you have?"
      },
      {
        choices: [],
        id: 6,
        index: 2,
        type: "FILL_IN",
        value: "What is your favorite food?"
      }
    ]
  }
};
const admins = [{ name: "Foo", id: 1001 }, { name: "Bar", id: 1002 }];

class QuestionnaireForm extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      author_id: sampleData.data.author_id,
      questions: sampleData.data.questions,
      newQuestionType: "FILL_IN",
      newQuestionValue: "enter question"
    };

    this.handleNewQuestionType = this.handleNewQuestionType.bind(this);
    this.handleNewQuestionValue = this.handleNewQuestionValue.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.getRemoveHandler = this.getRemoveHandler.bind(this);
    this.removeQuestion = this.removeQuestion.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.saveDraft = this.saveDraft.bind(this);
  }

  questions() {
    return this.state.questions;
  }

  setQuestions(qList) {
    this.setState({ questions: qList });
  }

  getAdminList() {
    return admins;
  }

  addQuestion(qType, qValue) {
    let newQuestions = this.questions().concat([
      { type: qType, value: qValue, choices: [] }
    ]);
    this.setQuestions(newQuestions);
  }

  handleNewQuestionType(e) {
    let newType = e.target.value;
    this.setState({ newQuestionType: newType });
  }

  handleNewQuestionValue(e) {
    let newValue = e.target.value;
    this.setState({ newQuestionValue: newValue });
  }

  handleAddQuestion(e) {
    e.preventDefault();
    let newQuestions = this.state.questions.concat([
      {
        type: this.state.newQuestionType,
        value: this.state.newQuestionValue,
        choices: []
      }
    ]);
    this.setState({ questions: newQuestions });
  }

  renderQuestion(question, index) {
    switch (question.type) {
      case "FILL_IN":
        return FillInQuestion({
          question: question,
          removeHandler: this.getRemoveHandler(index)
        });
      case "CHOOSE_MANY":
        return ChooseManyQuestion({
          question: question,
          removeHandler: this.getRemoveHandler(index)
        });
      default:
        return "WTF?";
    }
  }

  removeQuestion(currentQuestions, index) {
    var before = currentQuestions.slice(0, index);
    var after = currentQuestions.slice(index + 1);
    return before.concat(after);
  }

  getRemoveHandler(index) {
    let currentQuestions = this.state.questions;
    let form = this;
    return function(e) {
      e.preventDefault();
      let newQuestions = form.removeQuestion(currentQuestions, index);
      form.setState({ questions: newQuestions });
    };
  }

  saveDraft(e) {
    e.preventDefault();
    console.log(this.state.questions);
  }
  render() {
    let questions = this.state.questions;
    let author_id = this.state.author_id;
    return (
      <form
        className="questionnaireForm"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        Create Questionnaire
        <div>
          <label>
            Name: <input type="text" name="firstName" value={name} required />
          </label>
        </div>
        <div>
          <label>
            Author:{" "}
            <select name="author_id">
              <option selected={author_id === undefined ? true : false}>
                Choose One
              </option>
              {this.getAdminList().map(function(admin) {
                return (
                  <option
                    key={admin.id}
                    value={admin.id}
                    selected={author_id === admin.id ? true : false}
                  >
                    {admin.name}
                  </option>
                );
              })}
            </select>
          </label>
          <div>
            <h3>Questions</h3>
            <ol>{questions.map(this.renderQuestion)}</ol>
            <button onClick={this.saveDraft}>Save Draft</button>
            <div>
              <p>{this.state.newQuestionType}</p>
              <select
                name="newQuestionType"
                onBlur={this.handleNewQuestionType}
                onChange={this.handleNewQuestionType}
                defaultValue={this.state.newQuestionType}
              >
                <option value="FILL_IN"> Fill In </option>
                <option value="CHOOSE_MANY"> Choose Many </option>
              </select>{" "}
              <input
                type="text"
                name="newQuestionValue"
                value={this.state.newQuestionValue}
                onChange={this.handleNewQuestionValue}
              />
              <button onClick={this.handleAddQuestion}>Add</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default QuestionnaireForm;
