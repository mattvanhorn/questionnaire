import React from "react";
import ChoiceListContainer from "./ChoiceListContainer";

const ChooseManyQuestion = ({
  id,
  name,
  value,
  choices,
  updateHandler,
  deleteHandler
}) => (
  <div>
    <input
      name={name}
      type="text"
      defaultValue={value}
      onChange={updateHandler}
    />
    <button onClick={deleteHandler}>delete</button>
    <ChoiceListContainer choices={choices} questionId={id} />
  </div>
);

export default ChooseManyQuestion;
