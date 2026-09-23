import { PartyPopper, Frown } from "lucide-react";

const QuizScoreHero = ({ score, correct, total, passed, passingScore }) => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon */}
      <div
        className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full ${
          passed
            ? "bg-green-500/15 text-green-600"
            : "bg-red-500/10 text-red-500"
        }`}
      >
        {passed ? (
          <PartyPopper className="h-9 w-9" />
        ) : (
          <Frown className="h-9 w-9" />
        )}
      </div>

      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-text">
        {passed ? "Congratulations" : "Keep practicing"}
      </p>

      <h2 className="mt-2 text-4xl font-bold tracking-tight text-primary-text">
        {score}%
      </h2>

      <p className="mt-1 text-sm text-muted-text">
        {correct} of {total} correct
      </p>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
        <span
          className={`rounded-full px-3 py-0.5 text-[11px] font-medium ${
            passed
              ? "bg-green-500/15 text-green-600"
              : "bg-red-500/10 text-red-500"
          }`}
        >
          {passed ? "Passed" : "Not Passed"}
        </span>
        <span className="rounded-full bg-surface2 px-3 py-0.5 text-[11px] font-medium text-muted-strong">
          Passing: {passingScore}%
        </span>
      </div>
    </div>
  );
};

export default QuizScoreHero;