import React, { useState } from "react";
import FillInQuestion from "./questions/FillInQuestion";
import ChooseManyQuestion from "./questions/ChooseManyQuestion";

const sampleData = {
  data: {
    author_id: 42,
    deleted: false,
    id: 1,
    name: "Your Profile",
    published: true,
    questions: [
      {
        choices: [
          {
            id: 4,
            index: 4,
            value: "Lizard"
          },
          {
            id: 3,
            index: 3,
            value: "Bird"
          },
          {
            id: 2,
            index: 2,
            value: "Cat"
          },
          {
            id: 1,
            index: 1,
            value: "Dog"
          }
        ],
        id: 7,
        index: 2,
        type: "CHOOSE_MANY",
        value: "What pets do you have?"
      },
      {
        choices: [],
        id: 6,
        index: 2,
        type: "FILL_IN",
        value: "What is your favorite food?"
      }
    ]
  }
};

const QuestionnaireForm = ({ data = sampleData.data }) => {
  const admins = [{ name: "Foo", id: 1001 }, { name: "Bar", id: 1002 }];
  const [questions, setQuestions] = useState(data.questions);
  const author_id = data.author_id;

  return (
    <form
      className="questionnaireForm"
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      Create Questionnaire
      <div>
        <label>
          Name: <input type="text" name="firstName" value={name} required />
        </label>
      </div>
      <div>
        <label>
          Author:{" "}
          <select name="author_id">
            <option selected={author_id === undefined ? true : false}>
              Choose One
            </option>
            {admins.map(function(admin) {
              return (
                <option
                  key={admin.id}
                  value={admin.id}
                  selected={author_id === admin.id ? true : false}
                >
                  {admin.name}
                </option>
              );
            })}
          </select>
        </label>
        <div>
          <h3>Questions</h3>
          <ol>
            {questions.map(function(question) {
              switch (question.type) {
                case "FILL_IN":
                  return FillInQuestion({ question: question });
                case "CHOOSE_MANY":
                  return ChooseManyQuestion({ question: question });
                default:
                  return "WTF?";
              }
            })}
          </ol>
        </div>
      </div>
    </form>
  );
};
export default QuestionnaireForm;
