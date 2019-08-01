import React, { useState } from "react";
import Choice from "./Choice";

function addChoice(currentChoices, str, choiceKey) {
  let index = choiceKey;
  let choice = { value: str, index: index };
  return currentChoices.concat([choice]);
}

function removeChoice(currentChoices, index) {
  var before = currentChoices.slice(0, index);
  var after = currentChoices.slice(index + 1);
  return before.concat(after);
}

function getRemoveHandler(choices, choice, setChoices) {
  return function(e) {
    e.preventDefault();
    let newChoices = removeChoice(choices, choices.indexOf(choice));

    setChoices(newChoices);
  };
}
const ChoiceList = ({ currentChoices = [] }) => {
  const [choices, setChoices] = useState(currentChoices);
  const [choiceKey, setChoiceKey] = useState(currentChoices.length + 1);
  return (
    <div>
      <ul>
        {choices.map(function(choice) {
          return (
            <li key={choice.index}>
              <Choice choiceObj={choice} choiceList={this} />
              <button onClick={getRemoveHandler(choices, choice, setChoices)}>
                {" "}
                delete
              </button>
            </li>
          );
        })}
      </ul>
      <button
        onClick={e => {
          e.preventDefault();
          let newChoices = addChoice(choices, "", choiceKey);
          setChoiceKey(choiceKey + 1);
          setChoices(newChoices);
        }}
      >
        add choice
      </button>
    </div>
  );
};
export default ChoiceList;
