import { useNavigate } from "react-router-dom";
import { ArrowLeft, BarChart3 } from "lucide-react";

const QuizResultHeader = ({ onBack }) => {
  return (
    <div className="shrink-0">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border-brand bg-surface2 text-muted-text transition-all hover:bg-surface2/70 hover:text-primary-text hover:border-border cursor-pointer"
          aria-label="Back to quizzes"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-muted-strong" />
          <h1 className="text-2xl font-semibold tracking-tight text-primary-text">
            Quiz Result
          </h1>
        </div>
      </div>
    </div>
  );
};

export default QuizResultHeader;