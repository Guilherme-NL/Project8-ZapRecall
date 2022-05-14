import setinha from "./images/setinha.png";
import React from "react";

export default function QuestionsWindow({ questions, setQuestions }) {
  function handleShowQuestion(question, status, icon) {
    const updatedQuestions = [...questions];

    const index = updatedQuestions.indexOf(question);
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      step: updatedQuestions[index].step + 1,
      status,
      icon,
    };

    if (updatedQuestions[index].step === 4) {
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        step: 1,
        status,
        icon,
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
            <div
              className={"question-step1 " + question.status}
              key={question.name}
            >
              <h2>{question.name}</h2>
              <div className={question.icon}>
                <ion-icon
                  onClick={() =>
                    onShowQuestion(question, "init", "play-outline")
                  }
                  name={question.icon}
                ></ion-icon>
              </div>
            </div>
          );
        }
        if (question.step === 2) {
          return (
            <div className="question-step2" key={question.name}>
              <p>{question.question}</p>
              <img
                onClick={() => onShowQuestion(question, "init", "play-outline")}
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
                <div
                  className="not"
                  onClick={() =>
                    onShowQuestion(question, "wrong", "close-circle")
                  }
                >
                  Não lembrei
                </div>
                <div
                  className="maybe"
                  onClick={() =>
                    onShowQuestion(question, "doubt", "help-circle")
                  }
                >
                  Quase não lembrei
                </div>
                <div
                  className="yes"
                  onClick={() =>
                    onShowQuestion(question, "right", "checkmark-circle")
                  }
                >
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
