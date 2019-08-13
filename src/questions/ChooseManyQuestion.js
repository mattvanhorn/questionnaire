import React from "react";
import ChoiceListContainer from "./ChoiceListContainer";

const ChooseManyQuestion = ({
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
    <ChoiceListContainer choices={choices} />
  </div>
);

export default ChooseManyQuestion;
