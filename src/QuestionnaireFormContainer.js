import React from "react";
import QuestionnaireForm from "./QuestionnaireForm";
const uuidv4 = require("uuid/v4");

class QuestionnaireFormContainer extends React.Component {
  constructor() {
    super();
    let data = this.sampleData().data;
    let converted = this.convertData(data);
    this.state = {
      // general questionnaire info
      admins: this.getAdminList(),
      name: data.name,
      author_id: null,
      // dynamically added questions/choices
      questions: this.reindex(converted.questions),
      choices: converted.choices,
      // new question form
      newQuestionType: "FILL_IN",
      newQuestionValue: "",
      defaultQuestionValue: "enter question"
    };
    this.doUpdate = this.doUpdate.bind(this);
    this.updateAuthorId = this.updateAuthorId.bind(this);
    this.updateName = this.updateName.bind(this);
    this.saveDraft = this.saveDraft.bind(this);

    this.getQuestions = this.getQuestions.bind(this);
    this.getQuestionsCopy = this.getQuestionsCopy.bind(this);
    this.handleNewQuestionType = this.handleNewQuestionType.bind(this);
    this.handleNewQuestionValue = this.handleNewQuestionValue.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleUpdateQuestion = this.handleUpdateQuestion.bind(this);
    this.handleDeleteQuestion = this.handleDeleteQuestion.bind(this);
  }

  sampleData() {
    return {
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
  }

  // helpers
  getQuestions() {
    return this.state.questions;
  }
  getQuestionsCopy() {
    return this.getQuestions().slice(0);
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
    console.log(newQuestions.map(q => q.key));
    return newQuestions;
  }

  // adding a question
  handleNewQuestionType(e) {
    this.setState({ newQuestionType: e.target.value });
  }

  handleNewQuestionValue(e) {
    this.setState({ newQuestionValue: e.target.value });
  }

  handleAddQuestion(e) {
    e.preventDefault();
    var newQuestions = this.getQuestionsCopy();
    newQuestions = newQuestions.concat([
      {
        type: this.state.newQuestionType,
        value: this.state.newQuestionValue,
        choices: [],
        key: uuidv4()
      }
    ]);
    console.log(this.state.defaultQuestionValue);
    console.log(this.state.newQuestionValue);

    this.setState({
      questions: this.reindex(newQuestions),
      newQuestionValue: this.state.defaultQuestionValue
    });

    console.log(this.state.defaultQuestionValue);
    console.log(this.state.newQuestionValue);
  }

  // updating a question
  handleUpdateQuestion(question, e) {
    let newQuestions = this.getQuestionsCopy();
    newQuestions[newQuestions.indexOf(question)].value = e.target.value;
    this.setState({ questions: this.reindex(newQuestions) });
  }

  // deleting a question
  handleDeleteQuestion(index, e) {
    e.preventDefault();
    let newQuestions = this.getQuestionsCopy();
    let removedQuestion = newQuestions.splice(index, 1)[0];
    let newChoices = this.state.choices.filter(
      c => !removedQuestion.choices.includes(c)
    );
    this.setState({
      questions: this.reindex(newQuestions),
      choices: newChoices
    });
  }

  getAdminList() {
    return [{ name: "Foo", id: 1001 }, { name: "Bar", id: 1002 }];
  }

  doUpdate(field, value) {
    this.setState({ [field]: value });
  }

  updateName(e) {
    this.doUpdate("name", e.target.value);
  }

  updateAuthorId(e) {
    this.doUpdate("author_id", e.target.value);
  }

  convertData(dataObj) {
    function flattenChoices(dataObj) {
      let questions = dataObj.questions;
      let choices = questions
        .map(function(q) {
          return q.choices.map(c => {
            c.questionId = q.id;
            return c;
          });
        })
        .reduce((acc, item) => acc.concat(item), []);

      return choices;
    }

    let choices = flattenChoices(dataObj);
    let questions = dataObj.questions.map(function(q) {
      q.choices = choices.filter(c => c.questionId == q.id);
      return q;
    });
    let obj = {
      choices: choices,
      questions: questions
    };
    return obj;
  }

  saveDraft(e) {
    e.preventDefault();
    let payload = {
      choices: this.state.choices,
      questions: this.state.questions,
      name: this.state.name,
      author_id: this.state.author_id
    };
    console.log(JSON.stringify(payload));
  }

  render() {
    return (
      <QuestionnaireForm
        questionnaire={this.state}
        questions={this.state.questions}
        admins={this.state.admins}
        name={this.state.name}
        author_id={this.state.author_id}
        updateName={this.updateName}
        updateAuthorId={this.updateAuthorId}
        saveDraft={this.saveDraft}
        newQuestionType={this.state.newQuestionType}
        newQuestionValue={this.state.newQuestionValue}
        defaultQuestionValue={this.state.defaultQuestionValue}
        handleNewQuestionType={this.handleNewQuestionType}
        handleNewQuestionValue={this.handleNewQuestionValue}
        handleAddQuestion={this.handleAddQuestion}
        handleUpdateQuestion={this.handleUpdateQuestion}
        handleDeleteQuestion={this.handleDeleteQuestion}
      />
    );
  }
}
export default QuestionnaireFormContainer;
