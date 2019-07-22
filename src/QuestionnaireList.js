import React, { useState, useEffect } from "react";
import QuestionnaireListItem from "./QuestionnaireListItem";

const QuestionnaireList = () => {
  const [questionnaires, setQuestionnaires] = useState([]);

  useEffect(() => {
    setQuestionnaires([]);
    const qNames = ["Foo Bar", "Baz"]; //list.map(({ name }) => name);
    setQuestionnaires(qNames);
  }, []);

  return (
    <table className="questionnaires">
      <thead>
        <tr>
          <th>Name</th>
          <th colSpan={3}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {questionnaires.map((q, idx) => (
          <QuestionnaireListItem key={`qq-${idx}`} value={q} />
        ))}
      </tbody>
    </table>
  );
};
export default QuestionnaireList;

//
//   profiles.allQuestionnaires().then(list => {
//   });
