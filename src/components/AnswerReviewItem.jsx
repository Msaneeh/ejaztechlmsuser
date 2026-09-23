import { CheckCircle2, XCircle } from "lucide-react";

const AnswerReviewItem = ({ question, index, userIndex }) => {
  const isCorrect = userIndex === question.correctIndex;

  return (
    <div
      className={`rounded-2xl border p-3 text-left ${
        isCorrect
          ? "border-green-500/30 bg-green-500/5"
          : "border-red-500/20 bg-red-500/5"
      }`}
    >
      <div className="flex items-start gap-2">
        <span className="mt-0.5 shrink-0">
          {isCorrect ? (
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          ) : (
            <XCircle className="h-4 w-4 text-red-500" />
          )}
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-primary-text">
            Q{index + 1}. {question.question}
          </p>
          <p className="mt-1 text-[11px] text-muted-text">
            Your answer:{" "}
            <span
              className={isCorrect ? "text-green-600" : "text-red-500"}
            >
              {userIndex != null
                ? question.options[userIndex]
                : "Skipped"}
            </span>
          </p>
          {!isCorrect && (
            <p className="text-[11px] text-muted-text">
              Correct:{" "}
              <span className="text-green-600">
                {question.options[question.correctIndex]}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnswerReviewItem;