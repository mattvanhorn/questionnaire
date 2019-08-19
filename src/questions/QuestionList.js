import React from "react";
import FillInQuestion from "./FillInQuestion";
import ChooseManyQuestion from "./ChooseManyQuestion";

const QuestionList = ({
  questions,
  newQuestionType,
  newQuestionValue,
  handleNewQuestionType,
  handleNewQuestionValue,
  addHandler,
  deleteHandler,
  updateHandler
}) => {
  function renderQuestion(updateHandler, deleteHandler, question, index) {
    switch (question.type) {
      case "FILL_IN":
        return (
          <FillInQuestion
            name={question.name}
            value={question.value}
            updateHandler={updateHandler.bind(this, question)}
            deleteHandler={deleteHandler.bind(this, index)}
          />
        );
      case "CHOOSE_MANY":
        return (
          <ChooseManyQuestion
            id={question.id}
            name={question.name}
            value={question.value}
            choices={question.choices}
            updateHandler={updateHandler.bind(this, question)}
            deleteHandler={deleteHandler.bind(this, index)}
          />
        );
      default:
        return "WTF?";
    }
  }
  return (
    <div>
      <ol>
        {questions.map(function(question, idx) {
          return (
            <li key={question.key}>
              {renderQuestion(updateHandler, deleteHandler, question, idx)}
            </li>
          );
        })}
      </ol>
      <div>
        <p>{newQuestionType}</p>
        <select
          name="newQuestionType"
          onBlur={handleNewQuestionType}
          onChange={handleNewQuestionType}
          defaultValue={newQuestionType}
        >
          <option value="FILL_IN"> Fill In </option>
          <option value="CHOOSE_MANY"> Choose Many </option>
        </select>{" "}
        <input
          type="text"
          name="newQuestionValue"
          defaultValue={newQuestionValue}
          onChange={handleNewQuestionValue}
        />
        <button onClick={addHandler}>Add</button>
      </div>
    </div>
  );
};
export default QuestionList;
