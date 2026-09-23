import AnswerReviewItem from "./AnswerReviewItem";

const QuizAnswerReview = ({ questions = [], answers = {} }) => {
  if (questions.length === 0) return null;

  return (
    <div className="mt-6 max-h-64 w-full max-w-md space-y-2 overflow-y-auto pr-1">
      {questions.map((q, i) => (
        <AnswerReviewItem
          key={q.id}
          question={q}
          index={i}
          userIndex={answers[q.id]}
        />
      ))}
    </div>
  );
};

export default QuizAnswerReview;