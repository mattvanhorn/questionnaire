import React from "react";

const QuestionnaireListItem = ({ item }) => {
  function getDeleteHandler(id) {
    return function(e) {
      e.preventDefault();
      alert("deleting questionnaire " + id);
    };
  }

  function getEditHandler(id) {
    return function(e) {
      e.preventDefault();
      alert("editing questionnaire " + id);
    };
  }

  function getPublishHandler(id) {
    return function(e) {
      e.preventDefault();
      alert("publishing questionnaire " + id);
    };
  }

  let editButton = <button onClick={getEditHandler(item.id)}>Edit</button>;
  let publishButton = (
    <button onClick={getPublishHandler(item.id)}>Publish</button>
  );

  if (item.published) {
    editButton = <button disabled={true}>Edit</button>;
    publishButton = <button disabled={true}>Publish</button>;
  }

  return (
    <tr key={item.name}>
      <td>{item.name}</td>
      <td>{editButton}</td>
      <td>{publishButton}</td>
      <td>
        <button onClick={getDeleteHandler(item.id)}>Delete</button>
      </td>
    </tr>
  );
};
export default QuestionnaireListItem;
