import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import QuestionnaireList from "./QuestionnaireList";
import QuestionnaireForm from "./QuestionnaireForm";

// import QuestionnaireForm from "./QuestionnaireForm";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Questionnaires</Link>
            </li>
            <li>
              <Link to="/new">Create Questionnaire</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Router>
        <QuestionnaireList path="/" />
        <QuestionnaireForm path="/new" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));

//
//
