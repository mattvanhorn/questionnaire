import React, { Component } from "react";
import QuestionListContainer from "./questions/QuestionListContainer";

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
      name: sampleData.data.name,
      author_id: sampleData.data.author_id,
      questions: sampleData.data.questions
    };

    this.saveDraft = this.saveDraft.bind(this);
  }

  getAdminList() {
    return admins;
  }

  saveDraft(e) {
    e.preventDefault();
    let payload = {
      questions: this.state.questions,
      name: this.state.name,
      author_id: this.state.author_id
    };
    console.log(JSON.stringify(payload));
  }

  render() {
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
            Name:{" "}
            <input
              type="text"
              name="name"
              value={name}
              onChange={n => this.setState({ name: n })}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Author:{" "}
            <select name="author_id" defaultValue={author_id}>
              <option>Choose One</option>
              {this.getAdminList().map(function(admin) {
                return (
                  <option key={admin.id} value={admin.id}>
                    {admin.name}
                  </option>
                );
              })}
            </select>
          </label>
          <div>
            <h3>Questions</h3>
            <QuestionListContainer questions={this.state.questions} />
            <button onClick={this.saveDraft}>Save Draft</button>
          </div>
        </div>
      </form>
    );
  }
}
export default QuestionnaireForm;
