import React from "react";
import ChoiceList from "./ChoiceList";

const ChooseManyQuestion = ({ question = {}, removeHandler }) => {
  return (
    <li key={question.id}>
      <input type="text" value={question.value} />
      <button onClick={removeHandler}>delete</button>
      <ChoiceList currentChoices={question.choices} />
    </li>
  );
};
export default ChooseManyQuestion;
