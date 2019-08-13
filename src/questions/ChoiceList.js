import React from "react";
import Choice from "./Choice";

const ChoiceList = ({ choices, addHandler, deleteHandler, updateHandler }) => (
  <div>
    <ul>
      {choices.map(function(choice, idx) {
        return (
          <li key={choice.key}>
            <Choice
              name={"ch" + idx}
              value={choice.value}
              id={choice.id}
              onChange={updateHandler.bind(this, choice, idx)}
            />
            <button onClick={deleteHandler.bind(this, idx)}> delete</button>
          </li>
        );
      })}
    </ul>
    <button onClick={addHandler}>add choice</button>
  </div>
);

export default ChoiceList;
