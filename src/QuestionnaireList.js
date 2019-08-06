import React, { Component } from "react";
import { Link } from "@reach/router";
import QuestionnaireListItem from "./QuestionnaireListItem";
import { getQuestionnaires } from './lib/client';

class QuestionnaireList extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      questionnaires: props.questionnaires || []
    };

    this.setQuestionnaires = this.setQuestionnaires.bind(this);
  }

  componentDidMount() {
    getQuestionnaires(this.setQuestionnaires);
  }

  componentDidUpdate(prevProps) {
    if (this.props.questionnaires !== prevProps.questionnaires) {
      getQuestionnaires(this.setQuestionnaires);
    }
  }

  setQuestionnaires(qList) {
    this.setState({ questionnaires: qList });
  }

  render() {
    const { questionnaires } = this.state;

    return (
      <div>
        <table className="questionnaires">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Questions</th>
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {questionnaires.map((q, idx) => (
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
