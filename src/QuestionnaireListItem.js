import React from "react";

const QuestionnaireListItem = ({ value }) => {
  return (
    <tr key={value}>
      <td>{value}</td>
      <td>Edit</td>
      <td>Publish</td>
      <td>Delete</td>
    </tr>
  );
};
export default QuestionnaireListItem;
