import React from "react";
import ChoiceList from "./ChoiceList";

const ChooseManyQuestion = ({ question = {} }) => {
  return (
    <li key={question.id}>
      <input type="text" value={question.value} />
      <ChoiceList currentChoices={question.choices} />
    </li>
  );
};
export default ChooseManyQuestion;
