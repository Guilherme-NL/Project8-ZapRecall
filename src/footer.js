export default function Footer({ defaultQuestions }) {
  const answerQuestions = defaultQuestions.filter(
    (question) => question.status !== "init"
  );
  console.log(answerQuestions);
  return (
    <div className="footer">
      {answerQuestions.length}/{defaultQuestions.length} CONCLUÍDOS
    </div>
  );
}
