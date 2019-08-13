import React from "react";
const FillInQuestion = ({ name, value, updateHandler, deleteHandler }) => (
  <div>
    <input
      type="text"
      name={name}
      defaultValue={value}
      onChange={updateHandler}
    />
    <button onClick={deleteHandler}>delete</button>
  </div>
);
export default FillInQuestion;
