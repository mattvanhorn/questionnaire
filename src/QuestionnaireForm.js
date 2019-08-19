import React from "react";
import QuestionList from "./questions/QuestionList";
import AdminSelect from "./AdminSelect";

const QuestionnaireForm = ({
  questions,
  admins,
  name,
  updateName,
  author_id,
  updateAuthorId,
  saveDraft,
  newQuestionType,
  newQuestionValue,
  defaultQuestionValue,
  handleNewQuestionType,
  handleNewQuestionValue,
  handleAddQuestion,
  handleUpdateQuestion,
  handleDeleteQuestion
}) => {
  function doNothing(e) {
    e.preventDefault();
  }
  return (
    <form className="questionnaireForm" onSubmit={doNothing}>
      Create Questionnaire
      <div>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={updateName}
            required
          />
        </label>
      </div>
      <div>
        <AdminSelect
          admins={admins}
          labelText="Author"
          selected={author_id}
          updateHandler={updateAuthorId}
        />
        <div>
          <h3>Questions</h3>
          <QuestionList
            questions={questions}
            newQuestionType={newQuestionType}
            newQuestionValue={newQuestionValue || defaultQuestionValue}
            handleNewQuestionType={handleNewQuestionType}
            handleNewQuestionValue={handleNewQuestionValue}
            addHandler={handleAddQuestion}
            deleteHandler={handleDeleteQuestion}
            updateHandler={handleUpdateQuestion}
          />
          <button onClick={saveDraft}>Save Draft</button>
        </div>
      </div>
    </form>
  );
};

export default QuestionnaireForm;
