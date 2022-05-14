export default function Footer({ questions }) {
  const answerQuestions = questions.filter(
    (question) => question.status !== "init"
  );
  console.log(answerQuestions);
  return (
    <div className="footer">
      {answerQuestions.length}/{questions.length} CONCLUÍDOS
    </div>
  );
}
