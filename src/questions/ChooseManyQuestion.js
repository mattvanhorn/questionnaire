import React from "react";
import ChoiceList from "./ChoiceList";

const ChooseManyQuestion = ({ question = {}, removeHandler }) => {
  function updateQuestion(e) {
    question.value = e.target.value;
  }
  return (
    <li key={question.id}>
      <input
        type="text"
        defaultValue={question.value}
        onChange={updateQuestion}
      />
      <button onClick={removeHandler}>delete</button>
      <ChoiceList currentChoices={question.choices} />
    </li>
  );
};
export default ChooseManyQuestion;
