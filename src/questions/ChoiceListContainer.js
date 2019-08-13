import React from "react";
import ChoiceList from "./ChoiceList";
const uuidv4 = require("uuid/v4");

class ChoiceListContainer extends React.Component {
  constructor({ choices }) {
    super();
    this.state = {
      choices: this.reindex(choices)
    };
    this.deleteChoice = this.deleteChoice.bind(this);
    this.addChoice = this.addChoice.bind(this);
    this.updateChoice = this.updateChoice.bind(this);
  }

  reindex(choices) {
    var newChoices = choices
      .sort(function(a, b) {
        return a.index - b.index;
      })
      .map(function(c, idx) {
        if (!c.key) {
          c.key = uuidv4();
        }
        c.index = idx;
        return c;
      });
    return newChoices;
  }

  addChoice(e) {
    e.preventDefault();
    var newChoices = this.state.choices.slice(0);
    newChoices = newChoices.concat([
      {
        value: "",
        key: uuidv4()
      }
    ]);
    this.setState({ choices: this.reindex(newChoices) });
  }

  deleteChoice(index, e) {
    e.preventDefault();
    var newChoices = this.state.choices.slice(0);
    newChoices.splice(index, 1);
    this.setState({ choices: newChoices });
  }

  updateChoice(choice, index, e) {
    choice.value = e.target.value;
  }

  render() {
    return (
      <ChoiceList
        choices={this.state.choices}
        addHandler={this.addChoice}
        deleteHandler={this.deleteChoice}
        updateHandler={this.updateChoice}
      />
    );
  }
}
export default ChoiceListContainer;
