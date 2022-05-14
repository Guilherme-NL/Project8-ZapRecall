export default function Footer({ questions, answerQuestions, renderElement }) {
  return (
    <div className="footer">
      {renderElement}
      <div className="concluded">
        {answerQuestions.length}/{questions.length} CONCLUÍDOS
      </div>
      <div className="results">
        {answerQuestions.map((question) => {
          return (
            <div className={question.icon}>
              <ion-icon className="" name={question.icon}></ion-icon>
            </div>
          );
        })}
      </div>
    </div>
  );
}
