import React from "react";
const FillInQuestion = ({ question = {}, removeHandler }) => {
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
    </li>
  );
};
export default FillInQuestion;
