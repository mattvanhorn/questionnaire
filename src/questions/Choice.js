import React, { Component } from "react";

class Choice extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      value: props.choiceObj.value || "",
      choiceObj: props.choiceObj || {},
      choiceList: props.choiceList || []
    };
  }

  replaceListItem(list, oldItem, newItem) {
    const index = list.indexOf(oldItem);
    return list
      .slice(0, index)
      .concat([newItem])
      .concat(list.slice(index + 1));
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={e => {
          console.log(this.state.choiceList);
          this.setState({
            choiceList: this.replaceListItem(
              this.state.choiceList,
              this.state.choiceObj,
              this
            ),
            value: e.target.value
          });
        }}
      />
    );
  }
}

export default Choice;
