import React from "react";
const FillInQuestion = ({ question = {} }) => {
  return (
    <li key={question.id}>
      <input type="text" value={question.value} />
    </li>
  );
};
export default FillInQuestion;
