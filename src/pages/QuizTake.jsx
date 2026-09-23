import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { quizzesData } from "@/mockdata/quizzesData";

const QuizTake = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const quiz = useMemo(
    () => quizzesData.find((q) => q.id === quizId),
    [quizId]
  );

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({}); // { [questionId]: optionIndex }
  const [finished, setFinished] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  if (!quiz || quiz.questions.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-8">
        <span className="text-3xl">😕</span>
        <h1 className="text-lg font-semibold text-primary-text">
          Quiz not available
        </h1>
        <Button
          onClick={() => navigate("/quizzes")}
          className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
        >
          ← Back to Quizzes
        </Button>
      </div>
    );
  }

  const total = quiz.questions.length;
  const question = quiz.questions[current];
  const selected = answers[question.id];

  const selectOption = (index) => {
    setAnswers((prev) => ({ ...prev, [question.id]: index }));
  };

  const goNext = () => {
    if (current < total - 1) setCurrent((c) => c + 1);
  };

  const goPrev = () => {
    if (current > 0) setCurrent((c) => c - 1);
  };

  const submitQuiz = () => {
    // Compute score
    let correct = 0;
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.correctIndex) correct += 1;
    });
    const score = Math.round((correct / total) * 100);
    setFinished(true);
    setShowConfirmSubmit(false);
    // TODO: POST submission to API
    console.log("Quiz submitted:", {
      quizId: quiz.id,
      score,
      correct,
      total,
      answers,
    });
    // Redirect to results page after a beat
    setTimeout(() => {
      navigate(`/quizzes/${quiz.id}/result`, {
        state: { score, correct, total, answers, quiz },
      });
    }, 200);
  };

  const progressPercent = ((current + 1) / total) * 100;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="flex h-full flex-col gap-4 overflow-hidden p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="shrink-0">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate("/quizzes")}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-all hover:bg-surface2/70 hover:text-primary-text hover:border-border cursor-pointer"
            aria-label="Exit quiz"
          >
            ←
          </button>

          <div className="flex min-w-0 flex-1 items-center gap-2">
            <span className="text-xl">🧠</span>
            <h1 className="truncate text-lg font-semibold tracking-tight text-primary-text sm:text-xl">
              {quiz.phase}
            </h1>
          </div>

          <Badge
            variant="outline"
            className="shrink-0 rounded-full border-border-brand bg-surface2 px-2.5 py-0.5 text-[10px] font-medium text-muted-strong"
          >
            Question {current + 1} / {total}
          </Badge>
        </div>

        {/* Progress bar */}
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-surface2">
          <div
            className="h-full rounded-full bg-primary-text transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question card */}
      <div className="glass-panel relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2rem] p-4 sm:p-6 shadow-xs">
        <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

        <div className="relative z-10 flex min-h-0 flex-1 flex-col">
          {/* Question text */}
          <div className="mb-4 shrink-0">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-text">
              Question {current + 1}
            </p>
            <h2 className="mt-1 text-base font-semibold leading-snug text-primary-text sm:text-lg">
              {question.question}
            </h2>
          </div>

          {/* Options — scrollable if many */}
          <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
            {question.options.map((opt, i) => {
              const isSelected = selected === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => selectOption(i)}
                  className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-all sm:p-4 ${
                    isSelected
                      ? "border-primary-text bg-surface2 shadow-xs"
                      : "border-border-brand bg-transparent hover:border-primary-text/40 hover:bg-surface2/60"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      isSelected
                        ? "bg-primary-text text-bg"
                        : "bg-surface2 text-muted-text"
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="min-w-0 flex-1 text-sm text-primary-text">
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3">
        <div className="text-[11px] text-muted-text">
          {answeredCount} of {total} answered
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            onClick={goPrev}
            disabled={current === 0}
            className="btn-glass h-9 rounded-full px-4 text-xs font-medium disabled:opacity-40"
          >
            ← Previous
          </Button>

          {current < total - 1 ? (
            <Button
              type="button"
              onClick={goNext}
              className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
            >
              Next →
            </Button>
          ) : (
            <Button
              type="button"
              onClick={() => setShowConfirmSubmit(true)}
              disabled={answeredCount < total}
              className="btn-primary h-9 rounded-full px-4 text-xs font-medium disabled:opacity-40"
            >
              Submit Quiz ✓
            </Button>
          )}
        </div>
      </div>

      {/* Confirm submit modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="glass-panel w-full max-w-md overflow-hidden rounded-[1.75rem] border-border-brand p-5 shadow-xl">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-xl text-gold">
                ⚠️
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-primary-text">
                Submit your quiz?
              </h3>
              <p className="mt-1 text-sm text-muted-text">
                You've answered {answeredCount} of {total} questions. Once submitted,
                you can't change your answers.
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <Button
                  variant="ghost"
                  onClick={() => setShowConfirmSubmit(false)}
                  className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
                >
                  Keep Reviewing
                </Button>
                <Button
                  onClick={submitQuiz}
                  className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
                >
                  Yes, Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizTake;