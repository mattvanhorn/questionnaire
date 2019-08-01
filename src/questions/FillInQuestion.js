import React from "react";
const FillInQuestion = ({ question = {}, removeHandler }) => {
  return (
    <li key={question.id}>
      <input type="text" value={question.value} />
      <button onClick={removeHandler}>delete</button>
    </li>
  );
};
export default FillInQuestion;
