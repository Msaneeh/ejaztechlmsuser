import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const QuizResult = () => {
  const navigate = useNavigate();
  const { quizId } = useParams();
  const { state } = useLocation();

  // Fallback if user navigates here directly without state
  const score = state?.score ?? 0;
  const correct = state?.correct ?? 0;
  const total = state?.total ?? 0;
  const quiz = state?.quiz;
  const answers = state?.answers ?? {};

  const passed = score >= (quiz?.passingScore ?? 60);

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/quizzes")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-all hover:bg-surface2/70 hover:text-primary-text hover:border-border cursor-pointer"
            aria-label="Back to quizzes"
          >
            ←
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xl">📊</span>
            <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
              Quiz Result
            </h1>
          </div>
        </div>
      </div>

      {/* Result card */}
      <div className="glass-panel relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2rem] p-6 shadow-xs">
        <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center text-center">
          <div
            className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full text-3xl ${
              passed
                ? "bg-green-500/15 text-green-600"
                : "bg-red-500/10 text-red-500"
            }`}
          >
            {passed ? "🎉" : "😔"}
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
              Passing: {quiz?.passingScore ?? 60}%
            </span>
          </div>

          {/* Answers breakdown */}
          {quiz?.questions?.length > 0 && (
            <div className="mt-6 max-h-64 w-full max-w-md space-y-2 overflow-y-auto pr-1">
              {quiz.questions.map((q, i) => {
                const userIdx = answers[q.id];
                const isCorrect = userIdx === q.correctIndex;
                return (
                  <div
                    key={q.id}
                    className={`rounded-2xl border p-3 text-left ${
                      isCorrect
                        ? "border-green-500/30 bg-green-500/5"
                        : "border-red-500/20 bg-red-500/5"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-sm">{isCorrect ? "✅" : "❌"}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-primary-text">
                          Q{i + 1}. {q.question}
                        </p>
                        <p className="mt-1 text-[11px] text-muted-text">
                          Your answer:{" "}
                          <span
                            className={
                              isCorrect ? "text-green-600" : "text-red-500"
                            }
                          >
                            {userIdx != null ? q.options[userIdx] : "Skipped"}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-[11px] text-muted-text">
                            Correct:{" "}
                            <span className="text-green-600">
                              {q.options[q.correctIndex]}
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <Button
              onClick={() => navigate("/quizzes")}
              className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
            >
              Back to Quizzes
            </Button>
            <Button
              onClick={() => navigate("/dashbord")}
              className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;