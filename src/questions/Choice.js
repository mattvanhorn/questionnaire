import React from "react";

const Choice = ({ name, value, onChange }) => (
  <input type="text" name={name} defaultValue={value} onChange={onChange} />
);

export default Choice;
