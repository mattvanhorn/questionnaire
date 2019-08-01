import React, { Component } from "react";
import { Link } from "@reach/router";
import QuestionnaireListItem from "./QuestionnaireListItem";

class QuestionnaireList extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      questionnaires: props.questionnaires || []
    };
  }

  componentDidMount() {
    this.setQuestionnaires([]);
    this.setQuestionnaires(this.getQuestionnairesList());
  }

  componentDidUpdate(prevProps) {
    if (this.props.questionnaires !== prevProps.questionnaires) {
      this.setQuestionnaires(this.getQuestionnairesList());
    }
  }

  getQuestionnairesList() {
    const cannedData = [
      {
        id: 1,
        authorId: 49,
        name: "Sample Questionnaire",
        deleted: false,
        published: false,
        questions: [
          {
            id: 2,
            index: 1,
            choices: [],
            answers: [],
            value: "What is your favorite food?",
            type: "FILL_IN",
            insertedAt: "2019-07-26T17:25:42.382Z",
            updatedAt: "2019-07-26T17:25:42.382Z"
          },
          {
            id: 1,
            index: 0,
            choices: [
              {
                id: 3,
                index: 1,
                value: "Dog",
                insertedAt: "2019-07-26T17:25:42.380Z",
                updatedAt: "2019-07-26T17:25:42.380Z"
              },
              {
                id: 2,
                index: 2,
                value: "Bird",
                insertedAt: "2019-07-26T17:25:42.377Z",
                updatedAt: "2019-07-26T17:25:42.377Z"
              },
              {
                id: 1,
                index: 0,
                value: "Cat",
                insertedAt: "2019-07-26T17:25:42.373Z",
                updatedAt: "2019-07-26T17:25:42.373Z"
              }
            ],
            answers: [],
            value: "What pets do you have?",
            type: "CHOOSE_MANY",
            insertedAt: "2019-07-26T17:25:42.370Z",
            updatedAt: "2019-07-26T17:25:42.370Z"
          }
        ],
        insertedAt: "2019-07-26T17:25:42.340Z",
        updatedAt: "2019-07-26T17:25:42.340Z"
      }
    ];
    return cannedData;
  }

  setQuestionnaires(qList) {
    this.setState({ questionnaires: qList });
  }

  render() {
    return (
      <div>
        <table className="questionnaires">
          <thead>
            <tr>
              <th>Name</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.questionnaires.map((q, idx) => (
              <QuestionnaireListItem key={`qq-${idx}`} item={q} />
            ))}
          </tbody>
        </table>
        <Link to="/new">Create Questionnaire</Link>
      </div>
    );
  }
}
export default QuestionnaireList;

//
//   profiles.allQuestionnaires().then(list => {
//   });
