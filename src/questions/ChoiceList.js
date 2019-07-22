import React, { useState } from "react";
import Choice from "./Choice";

function addChoice(currentChoices, str) {
  let index = currentChoices.length + 1;
  let choice = { value: str, index: index };
  return currentChoices.concat([choice]);
}

function removeChoice(currentChoices, index) {
  var before = currentChoices.slice(0, index);
  var after = currentChoices.slice(index + 1);
  return before.concat(after);
}

const ChoiceList = ({ currentChoices = [] }) => {
  const [choices, setChoices] = useState(currentChoices);
  return (
    <div>
      <ul>
        {choices.map(function(choice) {
          return (
            <li key={choice.index}>
              <Choice choiceObj={choice} choiceList={this} />
              <a
                href="/"
                onClick={function(e) {
                  e.preventDefault();
                  let newChoices = removeChoice(
                    choices,
                    choices.indexOf(choice)
                  );

                  setChoices(newChoices);
                }}
              >
                {" "}
                delete
              </a>
            </li>
          );
        })}
      </ul>
      <button
        onClick={e => {
          e.preventDefault();
          let newChoices = addChoice(choices, "");
          setChoices(newChoices);
        }}
      >
        add choice
      </button>
    </div>
  );
};
export default ChoiceList;
