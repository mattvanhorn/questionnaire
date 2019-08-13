import React from "react";
import FillInQuestion from "./FillInQuestion";
import ChooseManyQuestion from "./ChooseManyQuestion";

const QuestionList = ({
  questions,
  newQuestionType,
  newQuestionValue,
  newQuestionTypeHandler,
  newQuestionValueHandler,
  addHandler,
  deleteHandler,
  updateHandler
}) => {
  function renderQuestion(question, index) {
    switch (question.type) {
      case "FILL_IN":
        return (
          <FillInQuestion
            name={question.name}
            value={question.value}
            updateHandler={updateHandler.bind(this, index)}
            deleteHandler={deleteHandler.bind(this, index)}
          />
        );
      case "CHOOSE_MANY":
        return (
          <ChooseManyQuestion
            name={question.name}
            value={question.value}
            choices={question.choices}
            updateHandler={updateHandler.bind(this, index)}
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
          return <li key={question.key}>{renderQuestion(question, idx)}</li>;
        })}
      </ol>
      <div>
        <p>{newQuestionType}</p>
        <select
          name="newQuestionType"
          onBlur={newQuestionTypeHandler}
          onChange={newQuestionTypeHandler}
          defaultValue={newQuestionType}
        >
          <option value="FILL_IN"> Fill In </option>
          <option value="CHOOSE_MANY"> Choose Many </option>
        </select>{" "}
        <input
          type="text"
          name="newQuestionValue"
          value={newQuestionValue}
          onChange={newQuestionValueHandler}
        />
        <button onClick={addHandler}>Add</button>
      </div>
    </div>
  );
};
export default QuestionList;
