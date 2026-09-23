import { Button } from "@/components/ui/button";

const QuizFooterNav = ({
  currentIndex,
  total,
  answeredCount,
  onPrev,
  onNext,
  onSubmitClick,
}) => {
  const isLast = currentIndex === total - 1;
  const allAnswered = answeredCount === total;

  return (
    <div className="flex shrink-0 flex-wrap items-center justify-between gap-3">
      <div className="text-[11px] text-muted-text">
        {answeredCount} of {total} answered
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="btn-glass h-9 rounded-full px-4 text-xs font-medium disabled:opacity-40"
        >
          ← Previous
        </Button>

        {!isLast ? (
          <Button
            type="button"
            onClick={onNext}
            className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
          >
            Next →
          </Button>
        ) : (
          <Button
            type="button"
            onClick={onSubmitClick}
            disabled={!allAnswered}
            className="btn-primary h-9 rounded-full px-4 text-xs font-medium disabled:opacity-40"
          >
            Submit Quiz ✓
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizFooterNav;