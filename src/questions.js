import vector from "./images/Vector.png";
import setinha from "./images/setinha.png";
import React from "react";

export default function QuestionsWindow({ defaultQuestions }) {
  const [questions, setQuestions] = React.useState(defaultQuestions);

  function handleShowQuestion(question) {
    const updatedQuestions = [...questions];

    const index = updatedQuestions.indexOf(question);
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      step: updatedQuestions[index].step + 1,
    };

    if (updatedQuestions[index].step === 4) {
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        step: 1,
      };
    }
    setQuestions(updatedQuestions);
  }

  return (
    <div className="questions">
      <Questions onShowQuestion={handleShowQuestion} questions={questions} />
    </div>
  );
}

function Questions({ questions, onShowQuestion }) {
  return (
    <>
      {questions.map((question) => {
        if (question.step === 1) {
          return (
            <div className="question-step1" key={question.name}>
              <h2>{question.name}</h2>
              <img
                onClick={() => onShowQuestion(question)}
                src={vector}
                alt="vector"
              />
            </div>
          );
        }
        if (question.step === 2) {
          return (
            <div className="question-step2" key={question.name}>
              <p>{question.question}</p>
              <img
                onClick={() => onShowQuestion(question)}
                src={setinha}
                alt="setinha"
              />
            </div>
          );
        }
        if (question.step === 3) {
          return (
            <div className="question-step3" key={question.name}>
              <p>{question.answer}</p>
              <div className="answers">
                <div className="not" onClick={() => onShowQuestion(question)}>
                  Não lembrei
                </div>
                <div className="maybe" onClick={() => onShowQuestion(question)}>
                  Quase não lembrei
                </div>
                <div className="yes" onClick={() => onShowQuestion(question)}>
                  Zap!
                </div>
              </div>
            </div>
          );
        }
        return <></>;
      })}
    </>
  );
}
